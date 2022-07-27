import Comment from './Comment.js';

const commentsUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/txIV0x61cJerTV943Ps8/comments';

const postComment = async (comment) => {
  await fetch(commentsUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(comment),
  }).then((response) => response.json())
    .then((json) => json)
    .catch((err) => err);
};

const comment = (e) => {
  e.preventDefault();
  const title = String(document.querySelector('.bookCard').querySelector('.title').innerText);
  const user = e.target.parentElement.querySelector('#userName').value;
  const commentText = e.target.parentElement.querySelector('#commentText').value;
  const comment = new Comment(title, user, commentText);
  postComment(comment);
};

export default comment;