// Initialize Month Count
// Check Local Storage for Events

// Declare Variables...
const calenderDaysContainer = document.getElementById('calenderDays');
const monthYearDisplay = document.getElementById('monthYearDisplay');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const eventModal = document.getElementById('eventModal');
const dayCard = document.querySelectorAll('.dayCard');
const backButton = document.getElementById('backBtn');
const nextButton = document.getElementById('nextBtn');
// Declare array of Weekdays...
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let monthNav = 0;


// Function to render days of month
function loadDays() {
    // Declare new Date
    const currentDate = new Date();

    if(monthNav !== 0) {
        currentDate.setMonth(new Date().getMonth() + monthNav);
    }
    
    // Declare vars for dat, month, year
    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    
    
    // Calculate First Day of CURRENT Month
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
        //  Render "day of month number" based on index & render it to the square 
        dayCard.addEventListener('click', openModal);
        
        if(i > paddingDays) {
            dayCard.innerText = i - paddingDays
        } else {
            dayCard.classList.add('padding');
        }
        calenderDaysContainer.appendChild(dayCard);
    }
    
    // Add class to that indicates which dayCard is current day.
    
    // After dayCards are rendered successfully, then worry about CRUDing Events and navigating through months....
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

const openModal = () => {
    console.log("open modal");
    eventModal.style.display = 'block';
}

backButton.addEventListener('click', prevMonth)
nextButton.addEventListener('click', nextMonth)
modalCloseBtn.addEventListener('click', closeModal);

loadDays()
