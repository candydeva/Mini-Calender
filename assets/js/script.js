const monthName = document.getElementById("month-name");
const dayName = document.getElementById("dayname");
const dayNumber = document.getElementById("day-number");
const year = document.getElementById("year");

const date = new Date();

monthName.innerText = date.toLocaleDateString("en", {
    month: "long"
});

dayName.innerText = date.toLocaleString("en", {
    weekday:"long"
});

dayNumber.innerText=date.getDate();

year.innerText=date.getFullYear();