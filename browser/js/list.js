// Liste
export function makeList() {
    let list = document.createElement('ul');

    for(let i = 1; i <= 10; i++) {
        let listElement = document.createElement('li');
        listElement.innerText = i;
        list.appendChild(listElement);
    }
    return list;
}
export function logStuff() {
    console.log('stuff')
}