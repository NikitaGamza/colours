console.log('hi');

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const colours = [
  'red',
  'beige',
  'burlywood',
  'coral',
  'aqua',
  'darkcyan',
  'pink',
  'lawngreen',
  'fuchsia',
];
let previousColor;
let selectedColor;
function colorChanger() {
  do {
    selectedColor = colours.random();
  } while (previousColor == selectedColor);
  previousColor = selectedColor; //идея этого цикла работает, только если вынести переменные за пределы функции

  let el = document.createElement('div');
  el.className = 'main__cube';
  el.style.backgroundColor = selectedColor;
  document.getElementById('main__color').innerHTML = selectedColor;
  document.getElementById('main').style.backgroundColor = selectedColor;
  document.getElementById('main__btn').style.backgroundColor = selectedColor;
  const memo = document.getElementById('main__memo');
  memo.appendChild(el);
}
