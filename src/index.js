import './style.css';
import logo from '../asset/resource/logo.png';
import backgoround from '../asset/resource/booksimg.png';
import { getBooks } from './consumeAPI.js';
import bookCounter from './booksCounter.js';
import comment from './commentsHandler.js';

const logoImage = document.querySelector('.logo-img');
logoImage.src = logo;

const body = document.body;
body.style.backgroundImage = "url("+backgoround+")";
document.querySelector('.commentForm').onsubmit = comment;

getBooks();
bookCounter();
