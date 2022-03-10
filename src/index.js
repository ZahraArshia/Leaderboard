import './style.css';
import { postData, getData } from './modules/fetch.js';

// ID: FtC3VvFE6shGDfFVfsOp
const form = document.querySelector('form');
const name = document.getElementById('name');
const score = document.getElementById('score');
const refresh = document.getElementById('refresh');

window.onload = () => {
  getData();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const raw = JSON.stringify({
    user: name.value,
    score: score.value,
  });
  postData(raw);
  form.reset();
  getData();
});

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  getData();
});
