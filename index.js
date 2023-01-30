import { retrieveData, displayToPage } from './modules/book.js';
import { bookListHandler, addSectionHandler, contactInfoHandler } from './modules/bookhandler.js';
import { DateTime } from './modules/luxon.js';

const linForBookList = document.querySelector('.for_list_link');
const linkForAddSection = document.querySelector('.for_addSection_link');
const linkForContInfo = document.querySelector('.for_contact_link');

const dateParagraph = document.querySelector('.date');
const dateTime = DateTime.now();
dateParagraph.innerHTML = dateTime.toLocaleString(DateTime.DATETIME_MED);

window.onload = () => {
  linForBookList.style.color = 'blue';
  retrieveData();
  displayToPage();
};

linForBookList.addEventListener('click', bookListHandler);
linkForAddSection.addEventListener('click', addSectionHandler);
linkForContInfo.addEventListener('click', contactInfoHandler);
