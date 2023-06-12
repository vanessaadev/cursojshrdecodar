var idade = 16
var nome = "joao"

if(nome == "joao" && idade == 16){
    console.log(`o ${nome} pode na esgrima, pois seu nome é joao e ele é maior de idade`)
} else if (nome !== "joao") {
    console.log("o seu nome não é joao, portanto não poderá entrar na aula de esgrima")
} else if(idade < 16) {
    console.log("você é menor de idade portanto não poderá participar da aula de esgrima")
}