import Comment from './Comment.js';
import { LikeAPI } from './post&getLikes.js';

const commentsUrl = LikeAPI.replace('likes', 'comments');

const countComments = () => {
  const container = document.querySelector('.popUp').querySelector('.bookCard');
  const commentsTitle = container.querySelector('h3');
  const commentsCount = String([...container.querySelectorAll('.comment')].length);
  commentsTitle.innerText = `Comments(${commentsCount})`;
};

const showComments = (commentsArray) => {
  const container = document.querySelector('.popUp').querySelector('.commentsContainer');
  container.innerHTML = '';
  for (let i = 0; i < commentsArray.length; i += 1) {
    const commentElement = document.createElement('p');
    commentElement.className = 'comment';
    commentElement.innerText = `${commentsArray[i].creation_date} ${commentsArray[i].username}:${commentsArray[i].comment}`;
    container.appendChild(commentElement);
  }

  countComments();
};
const getComments = async (itemId) => {
  const getCommentUrl = `${commentsUrl}?item_id=${itemId}`;
  const noComments = [];
  await fetch(getCommentUrl)
    .then((response) => response.json())
    .then((result) => {
      showComments(result);
    })
    .catch(() => {
      showComments(noComments);
    });
};

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
  getComments(comment.item_id);
};

const comment = (e) => {
  e.preventDefault();
  const title = String(document.querySelector('.bookCard').querySelector('.title').innerText);
  const user = e.target.parentElement.querySelector('#userName').value;
  const commentText = e.target.parentElement.querySelector('#commentText').value;
  const comment = new Comment(title, user, commentText);
  postComment(comment);
  e.target.parentElement.querySelector('#userName').value = '';
  e.target.parentElement.querySelector('#commentText').value = '';
};

export { comment, getComments, showComments };