export default function displayHomePage() {
  const divvy = document.createElement('div');

  const img = document.createElement('img');
  img.src = './imgs/fairy.png';

  const header = document.createElement('h1');
  header.innerText = "John's Resto";

  const text = document.createElement('p');
  text.innerText = 'we sell lasagna, and lots of pesto and some fried rice';

  divvy.appendChild(header);
  divvy.appendChild(text);
  divvy.appendChild(img);
  return divvy;
}
