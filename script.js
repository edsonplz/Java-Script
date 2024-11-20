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