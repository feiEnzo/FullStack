function ex1(){
    // Desenvolver um algoritmo em JavaScript que exiba os números ímpares de 1 a 100
    let list = []
    for (let i=1; i<100; i = i+2){
        console.log(i)
        list.push(i)
    }
    window.alert(list)
}

function ex2(){
    // Faça um programa para imprimir os múltiplos de 5, no intervalo de 1 até 500
    let list = []
    for (let i=1; i<=500; i++){
        if (i%5 === 0){
            console.log(i)
            list.push(i)
        }
    }
    window.alert(list)
}

function ex3(){
    // Faça um programa em JavaScript que leia um número inteiro positivo e mostre todos os números a partir dele até zero (decrescente).
    // Exemplo 1: numero = 8 -> Mostrar 8 7 6 5 4 3 2 1 0
    // Exemplo 2: numero = 13 ->  Mostrar 13 12 11 10 9 8 7 6 5 4 3 2 1 0

    let num = prompt("Entre com o numero: ")
    let list = []
    for (let i=num; num>=0; num--){
        console.log(i)
        list.push(num)
    }
    window.alert(list)
}

function ex4(){
    // Desenvolver um algoritmo em JavaScript que exibe o resultado do fatorial de um número inteiro informado pelo usuário
    // Exemplo: 5! = 5 x 4 x 3 x 2 x 1
    // ou
    // como na multiplicação a ordem dos fatores não altera o produto... 5! = 1 x 2 x 3 x 4 x 5

    let num = prompt("Entre com o numero: ")
    for (let i=num-1; i>0; i--){
        num = num * i
    }
    console.log(num)
    window.alert(num)
}

function ex5(){
    //Foi realizada uma pesquisa entre os habitantes de uma dada região. Foram recolhidos os dados de idade, sexo (M/F) e salário. Construa um programa em JavaScript que informe:
    // a média de salário do grupo;
    // maior e menor idade do grupo;
    // quantidade de mulheres com salário até R$5000,00.
    // Encerre a entrada de dados quando for digitada uma idade negativa.

    let accSalario = 0
    let quant = 0
    let maiorIdade = 0
    let menorIdade = 100
    let quantMulher = 0

    let idade
    let sexo
    let salario

    while (1){
        idade = parseInt(prompt("Idade: "))
        if (idade<0){
            break
        }
        quant++
        if (idade > maiorIdade){
            maiorIdade = idade
        }
        if (idade < menorIdade){
            menorIdade = idade
        }
        sexo = prompt("Sexo (M/F): ")
        salario = parseFloat(prompt("Salario: "))

        accSalario += salario

        if (sexo === "F" || sexo === "f"){
            if (salario <= 5000){
                quantMulher++
            }
        }
    }
    window.alert("Media salarial: " + (accSalario/quant).toFixed(2) + "\nMaior idade: " + maiorIdade + "\nMenor idade: " + menorIdade + "\nMulheres <= 5000:  " + quantMulher)
    console.log("Media salarial: " + accSalario/quant + "\nMaior idade: " + maiorIdade + "\nMenor idade: " + menorIdade + "\nMulheres <= 5000:  " + quantMulher)
}