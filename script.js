//displaying present day and time using moment.js
var dayofWeek = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(dayofWeek);


//Using presentHour to decide if the hour matches that displayed in header so as to apply color change

var presentHour = moment().format('LT');

var allhoursValue = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];
var exactHour = presentHour;
var futureHour = presentHour < allhoursValue;
var pastHour = allhoursValue < exactHour;

console.log(presentHour)
console.log(exactHour)
console.log(pastHour)

function colorChange() {
    if (exactHour == presentHour){
        document.getElementsByClassName('col2').style.backgroundColor = 'red';
    }
    else if (pastHour < presentHour){
        document.getElementsByClassName('col2').style.backgroundColor = 'grey';
    }
    else (presentHour > futureHour) 
    {
        document.getElementsByClassName('col2').style.backgroundColor = 'green';
    }
}