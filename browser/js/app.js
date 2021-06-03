import * as List from './list.js';
import { makeHorloge } from './horloge.js';

List.logStuff();
const list = List.makeList();

document.getElementById('app').appendChild(list);

makeHorloge();

// NavBar
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const navItems = ['Accueil', 'Page 1', 'Page 2', 'Page 3', 'Page 4'];

for(let i = 0 ; i < navItems.length ; i++) {
    const li = document.createElement('li');
    li.innerText = navItems[i];
    ul.appendChild(li);
    li.addEventListener('click', () => {
        ul.childNodes.forEach(ulChild => ulChild.style.color = 'black');
        li.style.color = 'red';
    });
}
nav.appendChild(ul);
document.getElementById('app').appendChild(nav)

