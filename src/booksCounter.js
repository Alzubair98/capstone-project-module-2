const bookCounter = (array) => {
  const bookscounter = document.querySelector('.famous_books');
  bookscounter.innerHTML = `Famous Books ${array.length}`;
};

export default bookCounter;