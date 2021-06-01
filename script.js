//displaying present day and time using moment.js
function checkTime() {
  var dayofWeek = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(dayofWeek);
  savedText();
  changeColor();
}

//Saves entries to local storage
function saveToLocal(obj) {
  var text = obj.value;
  var id = obj.id;
  localStorage.setItem(id, text);
}

function savedText() {
  var savedKey = Object.keys(localStorage);
  console.log(savedKey);
  for (let i = 0; i < savedKey.length; i++) {
    if (document.getElementById(savedKey[i]) != null) {
      document.getElementById(savedKey[i]).textContent = localStorage.getItem(
        savedKey[i]
      );
    }
  }
}
// Color change code for different hours. Current, past, and future. The for loop will go through every hour and we have less than 10 business hours on the scheduler.
function changeColor() {
  var currentTime = moment().format("H");
  for (var i = 1; i < 10; i++) {
    var index = i.toString();

    var div1 = document.getElementById("t".concat(index));
    var div2 = document.getElementById("text".concat(index));

    if (
      Number.parseInt(div1.getAttribute("value")) < Number.parseInt(currentTime)
    ) {
      div2.style.backgroundColor = "gray";
    } else if (
      Number.parseInt(div1.getAttribute("value")) > Number.parseInt(currentTime)
    ) {
      div2.style.backgroundColor = "red";
    } else {
      div2.style.backgroundColor = "green";
    }
  }
}
