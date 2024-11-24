// alert("Hello Word")
console.log('Hello Word')

// 3 formas de declarar variavel
var nome1 = "João"
let nome2 = "Pedro"
const nome3 = "Edson"

console.log(nome1)
console.log(nome3)

let age = 21;
let newage = 15;

const calculo = age + newage;

console.log(calculo)

let nota1 = 6;
let nota2 = 4;
let nota3 = 8;
let nota4 = 8;

const media = ((nota1*1) + (nota2*2) + (nota3*3) + (nota4*4)) / 10;

//junções com crase
const fullname = `Meu nome é ${nome1} ${nome3} e eu tirei ${media} no colégio`;

//condições if
if (media >= 7) {
    console.log(`Párabens, você esta aprovado com nota ${media}!`)
} else if (media >= 5){
    console.log(`Sua media foi ${media} você está na final`)
} else {
    console.log(`Sua média foi ${media} nos vemos ano que vem!`)
}

//switch case
switch (media) {
    case 7:
        console.log(`Párabens, você esta aprovado com nota ${media}!`)
    break;
    case 5:
        console.log(`Sua media foi ${media} você está na final`)
    break;
    case 4:
        console.log(`Sua média foi ${media} nos vemos ano que vem!`)
    break;
}

//condições ou e e
if ((nota1 == 4 || 6) && nota2 == 4) {
    console.log("Suas duas primeiras notas foram ruim")
}

//if ternario
const nome = age==21 ? "È o Edson" : "Não é o Edson"

console.log(nome)
console.log(media)
console.log(fullname)

//funções
function calcularMedia (a,b,c) {
    const somanotas= a+b+c;
    const resultado= somanotas/3;
    console.log(`Sua media e: ${resultado}`)
}

//função usando retorno
function calculaarMedia (a,b,c) {
    const resultado = (a+b+c)/3
    return `Sua media e: ${resultado}`
}

const meedia = calculaarMedia(8,8,8)

calcularMedia(7,7,7)
console.log(meedia)

//arrow function
const calcularrMedia = (a,b,c) => {
    return (a+b+c)/3
}

const formatarnome = nome => `Seu nome e: ${nome}`

const nomee = formatarnome("Edson") 
const mediaa = calcularrMedia(6,6,6)

console.log(mediaa)
console.log(nomee)


let frase = ``;

function nomesobrenome (nome, sobrenome) {
    let frase = `O nome e: ${nome} e o sobrenome e: ${sobrenome}`;
    return frase
}

const formatartext = (name,surname) => {
    let frase = `O seu nome: ${name}, seu sobrenome: ${surname}`
    return frase;
}

console.log(formatartext("João", "Silva"))

let listanomes = ["José","Pedro","Lucas"];
listanomes.push("Edson");
listanomes.pop();
listanomes.shift();
listanomes.splice(1,1,"Pangolão")

console.log(listanomes)

const dadospessoais = {
    nome: "Edson",
    idade: 21,
    ocupacao: "Estudante",
    endereco: {
        cidade:"Piloezinhos",
        bairro:"Amarelinha"
    }
}

console.log(dadospessoais)

//Estrutura de repetição For
for (let i=1; i<=5 ; i++) {
    console.log(`O index : ${i}`)
}

alunos = ["Rogerio","Darlan","Luan"]
alunos.push("Edson")
alunos.push("Sarah")

// for (let i in alunos) {
//     console.log(`j3:O nome do aluno e: ${alunos[i]}`)
// }

// for (let i of alunos) {
//     console.log(`j2:O nome do aluno e: ${i}`)
// }

// for (let i=0; i<alunos.length; i++) {
//     console.log(`j1:O nome do aluno e: ${alunos[i]}`)
// }


//Estrutura de repetição While
contador = 0;

while(contador <5) {
    console.log(`Contador: ${contador}`)
    contador++
}

conta = 0;

do {
    console.log(`Contador: ${conta}`)
    conta++
} while(conta <3)