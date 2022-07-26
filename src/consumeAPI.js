import popUp from './popUp.js';

const url = 'http://openlibrary.org/subjects/love.json?published_in=1800-1801&details=false';
const bookContiner = document.querySelector('.books-continer');

const booksGenerator = (array) => {
  for (let i = 0; i < 6; i += 1) {
    const image = document.createElement('img');
    image.src = `https://covers.openlibrary.org/b/id/${array[i].cover_id}-M.jpg`;

    const likeBtn = document.createElement('button');
    likeBtn.innerHTML = 'Like';

    const commentBtn = document.createElement('button');
    commentBtn.className = 'commentBtn';
    commentBtn.onclick = popUp;
    commentBtn.innerHTML = 'Comment';

    const name = document.createElement('h3');
    name.innerText = array[i].title;

    const continer = document.createElement('div');
    continer.append(image, name, likeBtn, commentBtn);

    bookContiner.appendChild(continer);
  }
};

const getBooks = () => {
  fetch(url).then(async (res) => {
    const data = await res.json();
    booksGenerator([...data.works]);
  });
};

export { getBooks, booksGenerator };