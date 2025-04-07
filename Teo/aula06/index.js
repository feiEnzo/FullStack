p1 = document.getElementById("element").innerHTML

console.log(p1)

let nome = prompt("Nome: ")
let idade = prompt("Idade: ")
let ano = 2025

console.log("name: "+nome)
console.log("idade: "+idade)

document.getElementById("ex1").innerHTML = "Ola "+nome + " seu ano de nascimento eh " + (ano-idade);

function ex2(){
    console.log("Executando funcao ex2()")
    x = document.getElementById("num1").value
    for (let i=x; i<=2*x; i++){
        document.getElementById("ex2").innerHTML = document.getElementById("ex2").innerHTML + i + "\n"
    }
}

function ex3(){
    console.log("Executando funcao ex3()")
    x = parseInt(document.getElementById("num2").value)
    y = parseInt(document.getElementById("num3").value)

    document.getElementById("ex3").innerHTML = "Soma = " + (x+y)
}

function ex4(a){
    if (a===0){
        x = parseInt(document.getElementById("num4").value)
        y = parseInt(document.getElementById("num5").value)

        if (x<0 || y<0){
            document.getElementById("ex4").innerHTML = x+y
        }
        else {
            document.getElementById("ex4").innerHTML = x*y
        }
    }
    if (a===1){
        document.getElementById("ex4").innerHTML = ""
    }
}