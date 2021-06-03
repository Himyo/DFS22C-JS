//Clock
const clock = document.createElement('p');
clock.id = "myParagraphe";

// EventListener example
const button = document.createElement('button');
button.innerText = "Hellooooooo";

button.addEventListener('click', () => {
    clock.style.color = "red"
});

function updateClock() {
    const date = new Date();
    // const formattedDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    // const formattedDate2 = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`; //Template String
    const formattedDate3 = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds().toString().padStart(2, "0")}`;
    const clock = document.getElementById('myParagraphe');

    clock.innerText = formattedDate3;
    if (date.getSeconds() % 5 === 0) {

        clock.style.color = clock.style.color === 'green' ? 'black' : 'green';
    }
}

// Horloge 
export const makeHorloge = () => {

    const horloge = document.createElement('div');
    horloge.appendChild(clock);
    horloge.appendChild(button);

    document.getElementById('app').appendChild(horloge);

    updateClock();
    window.setInterval(updateClock, 1000);
}

