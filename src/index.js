import displayHomePage from './homepage.js';
import displayMenu from './menu.js';
import displayContact from './contact.js';

const home = displayHomePage();
const menu = displayMenu();
const cont = displayContact();

const body = document.querySelector('body');

const btnDiv = document.createElement('div');
const content = document.createElement('div');
const homeBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const contBtn = document.createElement('button');

btnDiv.setAttribute('id', 'btndiv');
content.setAttribute('id', 'content');
homeBtn.setAttribute('id', 'homebtn');
menuBtn.setAttribute('id', 'menubtn');
contBtn.setAttribute('id', 'contactbtn');

btnDiv.appendChild(homeBtn);
btnDiv.appendChild(menuBtn);
btnDiv.appendChild(contBtn);

content.appendChild(home);

body.appendChild(btnDiv);
body.appendChild(content);

homeBtn.addEventListener('click', () => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  content.appendChild(home);
});

menuBtn.addEventListener('click', () => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  content.appendChild(menu);
});

contBtn.addEventListener('click', () => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  content.appendChild(cont);
});

console.log('hiii');
