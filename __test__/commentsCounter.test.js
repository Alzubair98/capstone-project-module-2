/**
 * @jest-environment jsdom
 */

import { showComments } from '../src/commentsHandler.js';

document.body.innerHTML = `<section class="popUp">
<div class="commentsContainer">
<h3>Comments</h3>
</div>
</section>`;

const commentsArray = [{
  creation_date: '27/05/2022',
  username: 'Jafer',
  comment: 'Test comment',
}];

const commentsArray2 = [{
  creation_date: '27/05/2022',
  username: 'Jafer',
  comment: 'Test comment',
},
{
  creation_date: '28/05/2022',
  username: 'Jafer',
  comment: 'Test comment2',
},
{
  creation_date: '29/05/2022',
  username: 'Jafer',
  comment: 'Test comment3',
}];

describe('Test for comments counter', () => {
  test('Adding one comment and check the counter', () => {
    showComments(commentsArray);
    const commentsCounter = Number(document.querySelector('h3').innerText.split('(')[1].split(')')[0]);
    expect(commentsCounter).toBe(1);
  });

  test('Adding three comments and check the counter', () => {
    showComments(commentsArray2);
    const commentsCounter = Number(document.querySelector('h3').innerText.split('(')[1].split(')')[0]);
    expect(commentsCounter).toBe(3);
  });
});