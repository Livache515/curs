document.querySelectorAll('td')
        .forEach(cell=>cell.addEventListener("click",onClick))


var simbol = 'x';
function onClick(event) {
    let cell = event.target;
    cell.removeEventListener("click",onClick);
    cell.innerText = simbol;
    simbol=simbol == 'x' ? '0' :'x';
}