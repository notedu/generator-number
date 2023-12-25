const generatorButton = document.getElementById("generator-button");
const textNumbers = document.getElementById("numbers");

generatorButton.addEventListener('click', () => {
    textNumbers.innerHTML = "";
    for (let i = 0; i <= 9; i++) {
        textNumbers.innerHTML += `Número: ${Math.floor(Math.random() * 100)}<br>`
    }
})