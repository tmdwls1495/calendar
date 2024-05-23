
document.addEventListener('DOMContentLoaded', function() {
    const daysContainer = document.querySelector('.day');
    const monthName = document.querySelector('.month-name');
    const month = "2024년 5월";
    const lastDay = 31;
    const startDay = 3; 

   
    monthName.textContent = month;

    
    function getCalendar() {
        
        daysContainer.innerHTML = '';

       
        for (let i = 0; i < startDay; i++) {
            const emptyDay = document.createElement('li');
            emptyDay.classList.add('empty');
            daysContainer.appendChild(emptyDay);
        }

       
        for (let i = 1; i <= lastDay; i++) {
            const day = document.createElement('li');
            day.textContent = i;
            daysContainer.appendChild(day);
        }
    }

    getCalendar();
});