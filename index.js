const months =[
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const weeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
 

let digitalClock = () => {
  let date = new Date();
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();
  let dnum = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let amorpm = hours >= 12 ? "PM" : "AM";

  if (hours == 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let monthName = months[month];
  let weekName = weeks[day];

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("amorpm").innerHTML = amorpm;

  document.getElementById("dateday").innerHTML = weekName + " " + dnum + " " + monthName + ", " + year;
  setInterval(digitalClock, 1000);
};

digitalClock();
