
/*
    funções auto executáveis
    (também conhecidas como IIFEs - Immediately Invoked Function Expressions)
*/


(async (idade) => {
    let nome = "Ariel";
    console.log("Olá ", nome, "Sua idade é: ", idade);

    const resultado = await Promise.resolve('promise resolvida');
    console.log("Executou: ", resultado);
})(29)
