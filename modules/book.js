import storeData from './store.js';

const addBtn = document.querySelector('#add');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
let booksData = [];
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Math.random();
  }

  static addBook(book) {
    const newBook = new Book(book.title, book.author);
    booksData.push(newBook);
    storeData(booksData);
    window.location.reload();
  }

  static removeBook(book) {
    let currentBooksData = booksData;
    currentBooksData = booksData.filter((e) => e.id !== book.id);
    storeData(currentBooksData);
  }
}

const dynamicCreation = document.querySelector('.daynamic');
let count = 0;
const bookLoders = (bookToBeLoad) => {
  const book = document.createElement('article');
  book.classList.add('article_content');
  if (count % 2 === 0) {
    book.style.backgroundColor = '#e5e5e5c4';
  } else {
    book.style.backgroundColor = 'white';
  }
  count += 1;
  const title = document.createElement('p');
  title.innerText = `"${bookToBeLoad.title}" by ${bookToBeLoad.author}`;
  book.append(title);
  const button = document.createElement('button');
  button.classList.add('remove');
  button.innerText = 'Remove';
  button.addEventListener('click', () => {
    Book.removeBook(bookToBeLoad);
    book.style.display = 'none';
  });
  book.append(button);
  dynamicCreation.append(book);
  dynamicCreation.classList.add('daynamic');
};

export const getData = () => {
  const bookData = window.localStorage.getItem('books');
  const parseBookData = JSON.parse(bookData);
  if (parseBookData) {
    booksData = parseBookData;
  }
};

export const displayAll = () => {
  booksData.forEach((book) => {
    bookLoders(book);
  });
};

addBtn.addEventListener('click', () => {
  const newBook = new Book(titleInput.value, authorInput.value);
  Book.addBook(newBook);
  displayAll(newBook);
});
