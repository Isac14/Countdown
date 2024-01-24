const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const weekdays = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

const renew = document.querySelector(".renew");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2025, 11, 30, 17, 30); //

const year = futureDate.getFullYear();
const month = futureDate.getMonth();
const day = futureDate.getDate();
const weekday = futureDate.getDay();

//Functions
function convertWeekday(weekday) {
  wd = weekdays[weekday];
  return wd;
}

function convertMonth(month) {
  m = months[month];
  return m;
}

//Converting index to the actual names
convertWeekday(weekday);
convertMonth(month);

renew.textContent = `A oferta termina ${
  wd + ", " + day + " de " + m + " de " + year
}`;

//Future time in miliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  //1sec = 1000ms
  //1min = 60sec
  //1hr = 60min
  //1d = 24hr

  //Value in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //Calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = (t % oneDay) / oneHour;
  hours = Math.floor(hours);
  let minutes = (t % oneHour) / oneMinute;
  minutes = Math.floor(minutes);
  let seconds = (t % oneMinute) / 1000;
  seconds = Math.floor(seconds);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
