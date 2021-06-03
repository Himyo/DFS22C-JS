import * as List from './list.js';
import { getNav } from './navbar.js';
import { makeHorloge } from './horloge.js';
import { testPromise } from './promise.js'

List.logStuff();
const list = List.getList();
const nav = getNav();
makeHorloge();

document.getElementById('app').appendChild(list);
document.getElementById('app').appendChild(nav)

const button = document.createElement('button');
button.innerText = "prout ! ";
document.getElementById('app').appendChild(button);

button.addEventListener('click', () => {
    testPromise();
})

const gifhouse = document.getElementById('gifhouse');
gifhouse.querySelector('input').forEach(input => {})