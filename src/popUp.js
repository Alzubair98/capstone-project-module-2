import { getComments } from './commentsHandler.js';

const url = 'http://openlibrary.org/subjects/love.json?published_in=1800-1801&details=false';
let coverId;
let imgUrl;
const showBook = (book) => {
  const title = document.querySelector('.popUp').querySelector('.title');
  const author = document.querySelector('.popUp').querySelector('.author');
  const available = document.querySelector('.popUp').querySelector('.available');
  const popUpImg = document.querySelector('.popUp').querySelector('.popUpImg');
  popUpImg.src = imgUrl;
  popUpImg.alt = book.title;
  const authors = [...book[0].authors];
  title.innerText = book[0].title;
  author.innerText = `Author: ${authors[0].name}`;
  available.innerText = `Status: ${book[0].availability.status}`;
};

const getBookDetails = () => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      showBook(json.works.filter((book) => book.cover_id === coverId));
    });
};

const closePopUp = () => {
  document.querySelector('.popUp').style.display = 'none';
};

const popUp = (e) => {
  imgUrl = e.target.parentElement.querySelector('img').src;
  // eslint-disable-next-line prefer-destructuring
  coverId = imgUrl.replace('https://covers.openlibrary.org/b/id/', '').split('-')[0];
  coverId = Number(coverId);
  getBookDetails();
  setTimeout(() => {
    getComments(String(document.querySelector('.popUp').querySelector('.title').innerText));
  }, 1000);
  document.querySelector('.popUp').querySelector('.closeBtn').onclick = closePopUp;
  document.querySelector('.popUp').style.display = 'block';
};

export default popUp;