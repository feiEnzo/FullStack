const max = 99
const min = 0

let numero = Math.floor(Math.random() * (max - min + 1) + min)


function chute(){
    c = parseInt(document.getElementById("chute").value)
    console.log(c)
    if (isNaN(c)){

    }
    else if (c < min || c > max){
        document.getElementById("a").style.setProperty("background-color", "yellow")
    }
    else if (numero < c){
        document.getElementById("h3").innerHTML = "O número que estou pensando é menor ↓ que " + c
        document.getElementById("p").innerHTML = "Chute outro número"
        document.getElementById("h3").style.setProperty("color", "orangered")
        document.getElementById("h3").style.setProperty("background-color", "darkred")
    }
    else if (numero > c) {
        document.getElementById("h3").innerHTML = "O número que estou pensando é maior ↑ que " + c
        document.getElementById("p").innerHTML = "Chute outro número"
        document.getElementById("h3").style.setProperty("color", "orangered")
        document.getElementById("h3").style.setProperty("background-color", "darkred")
    }
    else {
        document.getElementById("h3").innerHTML = "Acertou !"
        document.getElementById("p").innerHTML = ""
        document.getElementById("h3").style.setProperty("color", "lime")
        document.getElementById("h3").style.setProperty("background-color", "darkgreen")
    }
}