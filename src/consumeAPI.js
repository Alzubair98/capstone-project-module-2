import { getLikes, sendLikes } from './post&getLikes.js';

import popUp from './popUp.js';

import bookCounter from './booksCounter.js';

const url = 'http://openlibrary.org/subjects/love.json?published_in=2000-2010&details=false&limit=12';

const bookContiner = document.querySelector('.books-continer');

const booksGenerator = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    const image = document.createElement('img');
    image.classList.add('book_img');
    image.src = `https://covers.openlibrary.org/b/id/${array[i].cover_id}-M.jpg`;

    const likeBtn = document.createElement('button');
    likeBtn.innerHTML = 'Like';
    likeBtn.classList.add('like');
    likeBtn.setAttribute('id', i);

    const likeCount = document.createElement('p');
    likeCount.classList.add('likeCounter');
    likeCount.textContent = '';

    getLikes(array[i].title, likeCount);

    likeBtn.addEventListener('click', () => {
      const name = array[i].title;
      setTimeout(() => getLikes(name, likeCount), 600);
    });

    const commentBtn = document.createElement('button');
    commentBtn.className = 'commentBtn';
    commentBtn.onclick = popUp;
    commentBtn.innerHTML = 'Comment';

    const name = document.createElement('h3');
    name.classList.add('book_name');
    name.innerText = array[i].title;

    const continer = document.createElement('div');
    continer.classList.add('continer_div');
    continer.append(image, name, likeBtn, likeCount, commentBtn);

    bookContiner.appendChild(continer);
  }
};

const postLike = (array) => {
  bookContiner.addEventListener('click', (e) => {
    if (e.target.classList.contains('like')) {
      const { id } = e.target;
      const name = array[id].title;
      sendLikes(name);
    }
  });
};

const getBooks = () => {
  fetch(url).then(async (res) => {
    const data = await res.json();
    const books = data.works;
    return books;
  }).then((books) => {
    booksGenerator(books);
    postLike(books);
    bookCounter(books);
  });
};

export { getBooks, booksGenerator, url };