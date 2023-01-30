import { getData, displayAll } from './modules/book.js';
import { bookListHandler, addSectionHandler, contactInfoHandler } from './modules/bookhandler.js';
import { DateTime } from './modules/luxon.js';

const bookListLink = document.querySelector('.list_link');
const addSectionLink= document.querySelector('.addSection_link');
const contactInfoLink = document.querySelector('.contact_link');

const fullDate = document.querySelector('.date-today');
const date = DateTime.now();
fullDate.innerHTML = date.toLocaleString(DateTime.DATETIME_MED);

window.onload = () => {
  bookListLink.style.color = '#0000ff';
  getData();
  displayAll();
};

bookListLink.addEventListener('click', bookListHandler);
addSectionLink.addEventListener('click', addSectionHandler);
contactInfoLink.addEventListener('click', contactInfoHandler);
