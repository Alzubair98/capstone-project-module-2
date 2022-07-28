import './style.css';
import logo from '../asset/resource/bookslogo.png';
import { getBooks } from './consumeAPI.js';
import { comment } from './commentsHandler.js';
import bookCounter from './booksCounter.js';

const logoImage = document.querySelector('.logo-img');
logoImage.src = logo;
document.querySelector('.commentForm').onsubmit = comment;

getBooks();
bookCounter();
