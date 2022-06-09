// Initialize Month Count
// Check Local Storage for Events

// Declare Variables...
const calenderDaysContainer = document.getElementById('calenderDays');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const eventModal = document.getElementById('eventModal');
const dayCard = document.querySelectorAll('.dayCard');
// Declare array of Weekdays...
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let monthNav = 0;


// Function to render days of month
function loadDays() {
    // Declare new Date
    const currentDate = new Date();
    
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
    console.log(paddingDays);
    console.log(dateToString);

    // Calculate Total Days in CURRENT Month

    // Watch Video for padding days to start month...... :\

    // Map/Loop over days in Month to render daySquares
    for(i=1; i <= paddingDays + daysInMonth; i++) {
        const dayCard = document.createElement('div');
        dayCard.classList.add('day');
        //  Render "day of month number" based on index & render it to the square 
         i > paddingDays ? dayCard.innerText =  i - paddingDays : dayCard.innerText = "";


        calenderDaysContainer.appendChild(dayCard);
    }

    // After dayCards are rendered successfully, then worry about CRUDing Events and navigating through months....
} 

const closeModal = () => {
    eventModal.style.display = 'none';
}

const openModal = () => {
    console.log("open modal");
    eventModal.style.display = 'block';
}

modalCloseBtn.addEventListener('click', closeModal);

loadDays()
