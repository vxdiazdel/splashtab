import './style.css';
import { randomGradient } from './gradients';
import { renderDate, renderTime } from './time';
import { fetchRandomImageUrl } from './image';

const onLoaded = async () => {
  const body = document.body;
  const imgEl = document.querySelector('.bg') as HTMLImageElement;
  const dateTimeEl = document.querySelector('.date-time') as HTMLElement;
  const timeEl = dateTimeEl.querySelector('.time') as HTMLElement;
  const dateEl = dateTimeEl.querySelector('.date') as HTMLElement;

  // Load random gradient before fetching image
  const gradient = randomGradient();
  body.style.background = gradient;

  // Render/update time
  renderTime(timeEl);
  setInterval(() => renderTime(timeEl), 1000);

  // Render date
  renderDate(dateEl);

  // Add loaded class to date-time parent
  requestIdleCallback(() => dateTimeEl.classList.add('loaded'));

  // Fetch random image
  const imageUrl = await fetchRandomImageUrl();
  if (imageUrl !== '') {
    imgEl.src = imageUrl;
    requestIdleCallback(() => imgEl.classList.add('loaded'));
  }
};

document.addEventListener('DOMContentLoaded', onLoaded);
