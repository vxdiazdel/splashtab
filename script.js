const width = window.outerWidth;
const height = window.outerHeight;
const bg = document.getElementById('bg');

bg.src = `https://source.unsplash.com/collection/135648`;

// Set time
const time = document.querySelector('.time'),
    hours = time.querySelector('.hours'),
    minutes = time.querySelector('.minutes'),
    seconds = time.querySelector('.seconds');

let d, h, m, s, timer;

function calculateTime() {
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();

  if(h > 12) { h -= 12; }
  if(m <= 9) { m = '0' + m; }
  if(s <= 9) { s = '0' + s; }

  return { d, h, m, s };

}

function renderTime() {
  const t = calculateTime();
  hours.innerHTML = t.h;
  minutes.innerHTML = ':' + t.m;
  seconds.innerHTML = ':' + t.s;
}

renderTime();
timer = setInterval(renderTime, 1000);

// Set date
const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
const weekdays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

function calculateDate() {
  const d = new Date();
  const month = months[d.getMonth()];
  const weekday = weekdays[d.getDay()];
  const day = d.getDate();

  return { weekday, month, day };
}

function renderDate() {
  const d = calculateDate();
  const date = document.querySelector('.date'),
        weekday = date.querySelector('.weekday'),
        month = date.querySelector('.month'),
        day = date.querySelector('.day');

  weekday.innerHTML = `${d.weekday}, `;
  month.innerHTML = d.month;
  day.innerHTML = d.day;
}

renderDate();

window.onload = function() {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
}
