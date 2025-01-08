const aluno = [
    {
        nome:"Edson",
        notas:[7,7,7,7],
        cidade:"Pilõezinhos"
    },
    {
        nome:"Pedro",
        notas:[6,6,6,6],
        cidade:"Guarabira"
    },
    {
        nome:"Viturino",
        notas:[4,4,4,4],
        cidade:"Mamanguape"
    }
]

function media (a,b,c,d) {
    soma = a+b+c+d
    resultado = soma/4
    return resultado;
}

const aluno0 = media(aluno[0].notas[0],aluno[0].notas[1],aluno[0].notas[2],aluno[0].notas[3])
const aluno1 = media(aluno[1].notas[0],aluno[1].notas[1],aluno[1].notas[2],aluno[1].notas[3])
const aluno2 = media(aluno[2].notas[0],aluno[2].notas[1],aluno[2].notas[2],aluno[2].notas[3])

if (aluno0 >= 7) {
    console.log(`Nome: ${aluno[0].nome} | Cidade: ${aluno[0].cidade} | Média: ${aluno0} | Resultado: Aprovado`)
} else if (aluno0 >= 5) {
    console.log(`Nome: ${aluno[0].nome} | Cidade: ${aluno[0].cidade} | Média: ${aluno0} | Resultado: Em recuperação`)
} else {
    console.log(`Nome: ${aluno[0].nome} | Cidade: ${aluno[0].cidade} | Média: ${aluno0} | Resultado: Reprovado`)
}

if (aluno1 >= 7) {
    console.log(`Nome: ${aluno[1].nome} | Cidade: ${aluno[1].cidade} | Média: ${aluno1} | Resultado: Aprovado`)
} else if (aluno1 >= 5) {
    console.log(`Nome: ${aluno[1].nome} | Cidade: ${aluno[1].cidade} | Média: ${aluno1} | Resultado: Em recuperação`)
} else {
    console.log(`Nome: ${aluno[1].nome} | Cidade: ${aluno[1].cidade} | Média: ${aluno1} | Resultado: Reprovado`)
}

if (aluno2 >= 7) {
    console.log(`Nome: ${aluno[2].nome} | Cidade: ${aluno[2].cidade} | Média: ${aluno2} | Resultado: Aprovado`)
} else if (aluno2 >= 5) {
    console.log(`Nome: ${aluno[2].nome} | Cidade: ${aluno[2].cidade} | Média: ${aluno2} | Resultado: Em recuperação`)
} else {
    console.log(`Nome: ${aluno[2].nome} | Cidade: ${aluno[2].cidade} | Média: ${aluno2} | Resultado: Reprovado`)
}

const procurar = aluno.filter(nome=> nome == "Pedro")

console.log(procurar)