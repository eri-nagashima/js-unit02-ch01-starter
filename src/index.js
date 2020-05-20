import _ from 'lodash';

const numContainer = [];

function addRandomNum() {
  const mainEl = document.getElementById('main');
  const randomNum = _.random(0, 10);
  let p = document.createElement('p');
  p.innerHTML = `Random Number: ${randomNum}`.toString();
  document.body.appendChild(p);

  recordNum(randomNum);
}

function recordNum(num) {
  numContainer.push(num);

  if (numContainer.length === 6) {
    numContainer.shift();
  }
}

{
  const button1 = document.getElementById('button1');
  button1.addEventListener('click', addRandomNum);
  console.log('ready');
}

function sumNum() {
  const button2 = document.getElementById('button2');

  button2.addEventListener('click', function () {
    const result = _.sum(numContainer);
    let para = document.createElement('p');
    para.innerHTML = `Total: ${result}`.toString();
    document.body.appendChild(para);
  });
}
sumNum();
