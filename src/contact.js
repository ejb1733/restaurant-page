export default function displayContact() {
  const divvy = document.createElement('div');

  const h1 = document.createElement('h1');
  h1.innerText = 'Contact Us:';

  const phone = document.createElement('p');
  phone.innerText = '(778) 998-5588';

  const address = document.createElement('p');
  address.innerText = '6055 University Blvd, Vancouver, BC';

  divvy.appendChild(h1);
  divvy.appendChild(phone);
  divvy.appendChild(address);
  return divvy;
}
