// Liste
let list = document.createElement('ul');

for(let i = 1; i <= 10; i++) {
    let listElement = document.createElement('li');
    listElement.innerText = i;
    list.appendChild(listElement);
}
document.getElementById('app').appendChild(list);

// Horloge 
const clock = document.createElement('p');
clock.id = "myParagraphe";
document.getElementById('app').appendChild(clock);

function updateClock() {
    const date = new Date();
    // const formattedDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    // const formattedDate2 = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds()}`; //Template String
    const formattedDate3 = `${date.getHours()} : ${date.getMinutes()} : `+ date.getSeconds().toString().padStart(2, "0");
    const clock = document.getElementById('myParagraphe');

    clock.innerText = formattedDate3;
    if (date.getSeconds() % 5 === 0) {

        clock.style.color = clock.style.color === 'green' ? 'black' : 'green';
    }
}
updateClock();
window.setInterval(updateClock, 1000);

// EventListener example
const button = document.createElement('span');
button.innerText = "Hellooooooo";

button.addEventListener('click', (event) => {
    console.log(event);
    clock.style.color = "red"
})
document.getElementById('app').appendChild(button);

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

