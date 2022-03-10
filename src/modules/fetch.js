const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const postData = async (raw) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FtC3VvFE6shGDfFVfsOp/scores/', {
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
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FtC3VvFE6shGDfFVfsOp/scores/', {
    method: 'GET',
    redirect: 'follow',
  });
  const scoreList = await response.json();
  table.innerHTML = '';
  scoreList.result.forEach((event) => {
    table.innerHTML += `<li>${event.user} : ${event.score} </li>`;
  });
};

export { postData, getData };