const width = window.outerWidth;
const height = window.outerHeight;
const bg = document.getElementById('bg');

const gradients = [
  {left: '#24C6DC', right: '#514A9D'},
  {left: '#3A1C71', right: '#FFAF7B'},
  {left: '#43C6AC', right: '#191654'},
  {left: '#5f2c82', right: '#49a09d'},
  {left: '#4776E6', right: '#8E54E9'}
];
const index = Math.floor(Math.random() * 5);

document.body.style.background = `linear-gradient(to right, ${gradients[index].left}, ${gradients[index].right})`;
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
  month.innerHTML = `${d.month} `;
  day.innerHTML = d.day;
}

renderDate();

window.onload = function() {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
}

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({});
});
