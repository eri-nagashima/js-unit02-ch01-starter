import _ from 'lodash';

function addRandomNum() {
  const mainEl = document.getElementById('main');
  let p = document.createElement('p');
  p.innerHTML = 'Random Number: ' + _.random(0, 10).toString();
  document.body.appendChild(p);
}

{
  const button1 = document.getElementById('button1');
  button1.addEventListener('click', addRandomNum);
  console.log('ready');
}

for (let i = 0; i < 5; i++) {
  button1.addEventListener('click', function () {
    console.log('test');
  });
}
