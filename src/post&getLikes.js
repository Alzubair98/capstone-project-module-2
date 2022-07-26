const LikeAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/txIV0x61cJerTV943Ps8/likes';
import { addlike } from "./consumeAPI.js";

const sendLikes = (name) => {
  fetch(LikeAPI, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      item_id: name,
    }),
  });
};

const getLikes = (name) => {
  fetch(LikeAPI).then(async (res) => {
    const likesData = await res.json();
    likesData.forEach(element => {
        if(element.item_id  === name){
            const number = element.likes
            console.log(number);
        }        
    })
  })
};

export { sendLikes, getLikes };