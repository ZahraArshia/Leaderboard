import './style.css';

const table = document.getElementById('table');
const scoreList = [
  {
    name: 'name1',
    score: 100,
  },
  {
    name: 'name2',
    score: 20,
  },
  {
    name: 'name3',
    score: 50,
  },
  {
    name: 'name4',
    score: 78,
  },
  {
    name: 'name5',
    score: 125,
  },
  {
    name: 'name6',
    score: 77,
  },
  {
    name: 'name7',
    score: 42,
  },
];

scoreList.forEach((record) => {
  const item = document.createElement('tr');
  item.innerHTML = `${record.name}`;
  table.appendChild(item);
});