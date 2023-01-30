const linForBookList = document.querySelector('.for_list_link');
const linkForAddSection = document.querySelector('.for_addSection_link');
const linkForContInfo = document.querySelector('.for_contact_link');

const bookListSection = document.querySelector('.book_list');
const addNewSection = document.querySelector('.input_container');
const contactSection = document.querySelector('.contact_info');

export const bookListHandler = () => {
  bookListSection.style.display = 'flex';
  contactSection.style.display = 'none';
  addNewSection.style.display = 'none';
  linForBookList.style.color = 'blue';
  linkForAddSection.style.color = 'black';
  linkForContInfo.style.color = 'black';
};

export const addSectionHandler = () => {
  bookListSection.style.display = 'none';
  contactSection.style.display = 'none';
  addNewSection.style.display = 'flex';
  linForBookList.style.color = 'black';
  linkForAddSection.style.color = 'blue';
  linkForContInfo.style.color = 'black';
};

export const contactInfoHandler = () => {
  bookListSection.style.display = 'none';
  contactSection.style.display = 'block';
  addNewSection.style.display = 'none';
  linForBookList.style.color = 'black';
  linkForAddSection.style.color = 'black';
  linkForContInfo.style.color = 'blue';
};
