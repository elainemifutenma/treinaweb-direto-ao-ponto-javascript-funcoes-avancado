
/*
    Uma função de ordem superior, 
    ou higher order function (HOF),
*/

function dobro(n) {
    return n * 2;
}

function triplo(n) {
    return n * 3;
}

function aplicaFuncao(funcao, n) {
    return funcao(n);
}

console.log(aplicaFuncao(dobro, 5));

console.log(aplicaFuncao(triplo, 5));