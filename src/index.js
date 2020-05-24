import _ from 'lodash';

const numContainer = [];

function addRandomNum() {
  const randomNum = _.random(0, 10);
  let p = document.createElement('p');
  p.innerHTML = `Random Number: ${randomNum}`.toString();
  document.body.appendChild(p);

  if (numContainer.length === 5) {
    numContainer.shift();
  }
  numContainer.push(randomNum);
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
