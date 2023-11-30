// get elements
let hourClass = document.getElementsByClassName('hour');
let minuteClass = document.getElementsByClassName('minute');
let secondClass = document.getElementsByClassName('second');
let monthClass = document.getElementsByClassName('month');
let dayClass = document.getElementsByClassName('day');
let dateClass = document.getElementsByClassName('date');
let midDayClass = document.getElementsByClassName('midDay');
let dots = document.getElementsByClassName('bx')[0];
let dropDown = document.querySelector('.dropdown ul');


// day and month names
let dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// function for clock
let clockFunction = () => {
    let date = new Date();
    let hour = date.getHours();

    // if else statement for am and pm
    if (hour <= 12) {
        midDayClass[0].innerHTML = 'am';
    }
    else {
        midDayClass[0].innerHTML = 'pm';
    }

    let hour2 = hour % 12;

    // get time and date
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let month = monthName[date.getMonth()];
    let day = dayName[date.getDay()];
    let dat = date.getDate();

    // date and time innerHTML
    hourClass[0].innerHTML = hour2 + ' : ';
    minuteClass[0].innerHTML = minute;
    secondClass[0].innerHTML = second;
    monthClass[0].innerHTML = month + ' ,';
    dayClass[0].innerHTML = day + ' ,';
    dateClass[0].innerHTML = dat;
}


// setInterval for clock function
let clock = setInterval(clockFunction, 1000);
