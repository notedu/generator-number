console.log("Ready! Hello World")
//Button Github
document.getElementById("bgithub").addEventListener('click', () => {
    window.open("https://github.com/notedu", "_blank")
})

//Button --> Generator Numbers
const paragraphGenerator = document.getElementById("paragraphGenerator")
document.getElementById("bgenerator").addEventListener('click', () => {
    paragraphGenerator.innerHTML = "";
    for(let i = 0; i <= 10; i++) {
        paragraphGenerator.innerHTML += "Número " + Math.floor(Math.random() * 100) + "<br>"
    }
})