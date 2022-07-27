import bookCounter from '../src/booksCounter.js';

const item = [{
  key: '/subjects/love',
  name: 'love',
  subject_type: 'subject',
}];

document.body.innerHTML = '<h2 class="famous_books">Famous Books</h2>';

test('check the counter fucntion ', () => {
  bookCounter(item);
  const number = document.querySelector('.famous_books').innerHTML;
  expect(number).toBe('Famous Books 1');
});