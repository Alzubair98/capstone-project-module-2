const LikeAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/txIV0x61cJerTV943Ps8/likes';

const sendLikes = (name) => {
  fetch(LikeAPI, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      item_id: name,
    }),
  });
};

const getLikes = () => {
  console.log('likes');
};

export { sendLikes, getLikes };