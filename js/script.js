console.log("Ready! Hello World")
//Button Github
document.getElementById("bgithub").addEventListener('click', () => {
    window.open("https://github.com/notedu", "_blank")
})

//Button --> Generator Numbers
const pgenerator = document.getElementById("pgenerator")
document.getElementById("bgenerator").addEventListener('click', () => {
    pgenerator.innerHTML = "";
    for(let i = 0; i <= 10; i++) {
        pgenerator.innerHTML += "Número " + Math.floor(Math.random() * 100) + "<br>"
    }
})