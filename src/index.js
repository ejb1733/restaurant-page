import displayHomePage from './homepage.js';

const body = document.querySelector('body');
const content = document.createElement('div');
content.setAttribute('id', 'content');
body.appendChild(content);

content.appendChild(displayHomePage());

console.log('hiii');
