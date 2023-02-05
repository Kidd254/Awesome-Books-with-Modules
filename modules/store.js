const storeData = (booksData) => {
  if (window.localStorage) {
    const jsonData = JSON.stringify(booksData);
    window.localStorage.setItem('books', jsonData);
  }
};
export default storeData;
