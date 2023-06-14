console.log("questão 1")
//RESOLVIDO
//Faça um script que verifique se uma letra digitada num campo de input é vogal ou consoante.

var vogais = ["a","e","i","o","u"]
var letra = document.getElementById("input1")

function checar(){
 if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
     console.log("vogal")
 } else {
     console.log(`${letra} é uma consoante`)
 }
}
console.log(typeof letra)

//RESOLVIDO
console.log("questão 2")
/*
Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado

Aprovado >= 7
reprovado <7
aprovado com distinção ==10
*/

var num1 = 10
var num2 = 10
var media = (num1 + num2)/2
 
if(media >= 7 && media < 10){
    console.log(media + " aprovado")
} else if (media < 7) {
    console.log(media + " reprovado")
} else if (media == 10) {
    console.log(media + " aprovado com distinção")
}


//RESOLVIDO
console.log("questão 3")
/*
faça um script  que leia três numeros inteiros e mostre o maior deles
*/

var num1 = 12
var num2 = 20
var num3 = 15
var maior = num1

if(num2 > maior){
    maior = num2
} else if (num3 > maior) {
    maior = num3
} 

console.log(maior)


console.log("questão 4")
//RESOLVIDO
/* faça um script que pede dois inteiros e armazene eles em duas variveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert. Fazer duas varivaeis trocarem de valores entre si */

var num1 = 10
var num2 = 5
var novonum1 = num2
var novonum2 = num1

console.log(`fazendo a inversão de valores o primeiro número será ${novonum1} e o segundo será ${novonum2}`)




//RESOLVIDO
console.log("questão 5")
/*faça um script que leia trÊs números inteiros, em seguida mostre o maior e o menor das variáveis.*/
var num1 = 10
var num2 = 5
var num3 = 15
var maior = num1
var menor = num1

if(num2 > maior){
    maior = num2
} else if(num3 > maior){
    maior = num3
}

if(num2 < menor){
    menor = num2
} else if(num3 < menor){
    menor = num3
}

console.log(maior)
console.log(menor)



console.log("questão 6")
/*faça um script que leia três números e mostre-os em ordem descrescente */
var num1 = 1
var num2 = 2
var num3 = 3
var i = [num1, num2, num3]
while(i + 1){
    console.log(i)

    i++
}

//RESOLVIDO
console.log("questão 7")
/* faça um script que pergunte em que turno você estuda. peça para digitar  m-matutino ou v-vespertino ou n-noturno, imprima a mensagem "bom dia", "boa tarde ou boa noite ou valor inválido", conforme o caso */

var turno = prompt(`em que turno você estuda? m-matutino, v-vespertino ou n-noturno`)

if(turno == "m-matutino"){
    console.log("bom dia!")
} else if (turno == "v-vespertino") {
    console.log("boa tarde!")
} else if(turno == "n-noturno") {
    console.log("boa noite!")
} else {
    console.log("Valor inválido!")
}

console.log("questão 8")
/*  fazer depois POIS É MUTIO EXTENSO*/