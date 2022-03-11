const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const postData = async (raw) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jnpReA4xan62NMZrJJBA/scores/', {
    method: 'post',
    headers: {
      'Content-type': 'application/json; charset= UTF-8',
    },
    body: raw,
    redirect: 'follow',
  });
};

const table = document.getElementById('table');
const getData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jnpReA4xan62NMZrJJBA/scores/', {
    method: 'GET',
    redirect: 'follow',
  });
  const scoreList = await response.json();
  scoreList.result.sort((a, b) => b.score - a.score);
  table.innerHTML = '';
  scoreList.result.forEach((event) => {
    table.innerHTML += `<li class="item">${event.user} : ${event.score} </li>`;
  });
};

export { postData, getData };