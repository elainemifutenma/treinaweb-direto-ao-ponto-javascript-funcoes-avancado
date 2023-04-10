
function multiplicador(a) {
    return function (b) {
        return a * b;
    };
}


console.log(multiplicador(5)(10));