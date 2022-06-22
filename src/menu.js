export default function displayMenu() {
  const divvy = document.createElement('div');

  const burger = document.createElement('img');
  burger.src = './imgs/sparklz.jpeg';

  const header = document.createElement('h1');
  header.innerText = 'menu:';

  const burgerheader = document.createElement('h3');
  burgerheader.innerText = 'burger';

  divvy.appendChild(header);
  divvy.appendChild(burgerheader);
  divvy.appendChild(burger);
  return divvy;
}
