// Check Local Storage for Events
// Check Local Storage for Events
// Check Local Storage for Events
// Check Local Storage for Events
// Check Local Storage for Events
// Check Local Storage for Events
// Check Local Storage for Events

const calenderDaysContainer = document.getElementById('calenderDays');
const monthYearDisplay = document.getElementById('monthYearDisplay');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const eventModal = document.getElementById('eventModal');
const eventInput = document.getElementById('eventInput');
const dayCard = document.querySelectorAll('.dayCard');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const cancelBtn = document.getElementById('cancelBtn');
const saveBtn = document.getElementById('saveBtn');

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let monthNav = 0;
let events = [];
let selectedDay = null;


function loadDays() {
    const currentDate = new Date();

    if(monthNav !== 0) {
        currentDate.setMonth(new Date().getMonth() + monthNav);
    }
    
    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    
    
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    console.log(firstDayOfMonth);
    console.log(daysInMonth);
    
    const dateToString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });

    const paddingDays = weekDays.indexOf(dateToString.split(', ')[0]);
    console.log(dateToString);
    monthYearDisplay.innerHTML = firstDayOfMonth.toLocaleDateString('en-us', {
        month: 'long',
        year: 'numeric',
    });

    
    calenderDaysContainer.innerHTML = '';
    
    for(i=1; i <= paddingDays + daysInMonth; i++) {
        const dayCard = document.createElement('div');
        dayCard.classList.add('day');
        const selectedDayString = `${month + 1}/${i - paddingDays}/${year}`;
        // if(i - paddingDays === day && monthNav === 0) {
        //     dayCard.classList.add('today');
        // }
        //  Render "day of month number" based on index & render it to the square 
        dayCard.addEventListener('click', () => openModal(selectedDayString));
        
        if(i > paddingDays) {
            dayCard.innerText = i - paddingDays
            const eventForDay = events.find(e => e.date === selectedDayString);

            if(i - paddingDays === day && monthNav === 0) {
                dayCard.classList.add('today');
            }
                
            if(eventForDay) {
                let eventItem = document.createElement('p');
                eventItem.classList.add('event-item');
                eventItem.innerText = eventForDay.title;
            } 
            
         
                } else {
                    dayCard.classList.add('padding');
            } 
        calenderDaysContainer.appendChild(dayCard);
    }    
    // After dayCards are rendered successfully, then worry about CRUDing Events and navigating through months....
} 

const createEvent = (e) => {
    e.preventDefault();
    if(eventInput.value) {
        events.push({
            date: selectedDay,
            title: `${eventInput.value}`
        })
    }
    console.log(events);
    // e.preventDefault();
    // console.log("Create Event");
    // let eventText = eventInput.value;
    // console.log(eventText);
    // const eventItem = document.createElement('li');
    // eventItem.classList.add('event-item');
    // eventItem.innerHTML = `
    //     <p>${eventText}</p>
    // `
    // eventList.appendChild(eventItem);
    // console.log(eventList);
    // console.log(eventItem);
    eventInput.value = '';
    closeModal();
}

const prevMonth = () => {
    monthNav--;
    loadDays();
}

const nextMonth = () => {
    monthNav++;
    loadDays();
}

const closeModal = () => {
    eventModal.style.display = 'none';
}

const openModal = (date) => {
    console.log("open modal");
    eventModal.style.display = 'block';
    selectedDay = date
}

backBtn.addEventListener('click', prevMonth)
nextBtn.addEventListener('click', nextMonth)
modalCloseBtn.addEventListener('click', closeModal);
saveBtn.addEventListener('click', createEvent);
cancelBtn.addEventListener('click', closeModal);

loadDays()
