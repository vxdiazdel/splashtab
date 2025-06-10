const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const calculateTime = () => {
  const date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const ampm = hours < 12 ? 'am' : 'pm';

  // Convert to 12-hour format
  if (hours === 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours -= 12;
  }

  // Format hours/mins/seconds
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return {
    date,
    hours: formattedHours,
    minutes: formattedMinutes,
    seconds: formattedSeconds,
    ampm,
  };
};

export const renderTime = (el: HTMLElement) => {
  const { hours, minutes, seconds, ampm } = calculateTime();

  el.innerText = `${hours}:${minutes} ${seconds} ${ampm}`;
};

export const calculateDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = MONTHS[date.getMonth()];
  const weekday = WEEKDAYS[date.getDay()];

  return { day, month, weekday };
};

export const renderDate = (el: HTMLElement) => {
  const { day, month, weekday } = calculateDate();

  el.innerText = `${weekday}, ${month} ${day}`;
};
