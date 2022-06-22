import displayHomePage from './homepage.js';

const hp = displayHomePage();

const body = document.querySelector('body');

const btnDiv = document.createElement('div');
const content = document.createElement('div');
const homeBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const contactBtn = document.createElement('button');

btnDiv.setAttribute('id', 'btndiv');
content.setAttribute('id', 'content');
homeBtn.setAttribute('id', 'homebtn');
menuBtn.setAttribute('id', 'menubtn');
contactBtn.setAttribute('id', 'contactbtn');

btnDiv.appendChild(homeBtn);
btnDiv.appendChild(menuBtn);
btnDiv.appendChild(contactBtn);

content.appendChild(hp);

body.appendChild(btnDiv);
body.appendChild(content);

homeBtn.addEventListener('click', () => {
  hp.remove();
});

menuBtn.addEventListener('click', () => {
  console.log('append');
  content.appendChild(hp);
});

console.log('hiii');
