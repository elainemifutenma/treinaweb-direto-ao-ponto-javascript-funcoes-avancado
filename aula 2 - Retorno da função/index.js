
// function soma(a, b) {
//     console.log(a + b);

// }

// const resultado = soma(5, 10);

// console.log(resultado);

// ** Retornando um valor simples: **
// function soma(a, b) {
//     console.log(a + b);
//     return a + b;
// }

// const resultado = soma(5, 10);

// console.log(resultado);



// ** Retornando um arrays **

// function criarPessoa(nome, idade) {
//     return [nome, idade]
// }

// const [nome, idade] = criarPessoa('Ariel', 29);

// console.log(nome, idade);



// ** Retornando um objeto **


// function criarPessoa(nome, idade) {
//     return {
//         nome,
//         idade
//     }
// }

// const { nome, idade } = criarPessoa('Ariel', 29);

// console.log(nome, idade);



// ** Retornando uma função: **

function criarPessoa(nome, idade) {

    function myFunc() {
        return `${nome}  ${idade}`;
    }

    return myFunc()
}

const myFunc = criarPessoa('Ariel', 29);

console.log(myFunc);