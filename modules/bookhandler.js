const bookListLink = document.querySelector('.list_link');
const addSectionLink = document.querySelector('.addSection_link');
const contactInfoLink = document.querySelector('.contact_link');

const bookListSection = document.querySelector('.book_list');
const addNewSection = document.querySelector('.input_container');
const contactSection = document.querySelector('.contact_info');

export const bookListHandler = () => {
  bookListSection.style.display = 'flex';
  contactSection.style.display = 'none';
  addNewSection.style.display = 'none';
  bookListLink.style.color = '#0000ff';
  addSectionLink.style.color = '#00000';
  contactInfoLink.style.color = '#000000';
};

export const addSectionHandler = () => {
  bookListSection.style.display = 'none';
  contactSection.style.display = 'none';
  addNewSection.style.display = 'flex';
  bookListLink.style.color = '#000000';
  addSectionLink.style.color = '#0000ff';
  contactInfoLink.style.color = '#000000';
};

export const contactInfoHandler = () => {
  bookListSection.style.display = 'none';
  contactSection.style.display = 'block';
  addNewSection.style.display = 'none';
  bookListLink.style.color = '#000000';
  addSectionLink.style.color = '#000000';
  contactInfoLink.style.color = '#0000ff';
};
