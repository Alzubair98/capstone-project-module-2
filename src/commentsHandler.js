import Comment from './Comment.js';

const commentsUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/txIV0x61cJerTV943Ps8/comments';
const test = JSON.stringify({
  'item_id': "item1",
  'username': "Jane",
  'comment': "Hello"
});
const postComment = async (comment) => {
  const commentA = JSON.stringify({
    item_id: comment.item_id,
    username: comment.username,
    comment: comment.comment,
  });
  console.log(commentA);
  await fetch(commentsUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      Accept: 'application/json',
    },
    body: `${commentA}`,
  }).then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
};

const comment = (e) => {
  const title = document.querySelector('.bookCard').querySelector('.title').innerText;
  const user = e.target.parentElement.querySelector('#userName').value;
  const commentText = e.target.parentElement.querySelector('#commentText').value;
  const comment = new Comment(title, user, commentText);
  postComment(comment);
};

export default comment;