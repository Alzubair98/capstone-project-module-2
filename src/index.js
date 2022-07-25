import './style.css';
import logo from '../asset/resource/bookslogo.png';
import { getBooks } from './consumeAPI.js';

const logoImage = document.querySelector('.logo-img');
logoImage.src = logo;

getBooks();
