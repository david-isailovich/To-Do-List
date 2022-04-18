function workList() {
    let ispis = document.querySelector('#ispis').value;

    let newElement = document.createElement('li');
    newElement.innerText = ispis;

    let ul = document.querySelector('ul').appendChild(newElement);
}