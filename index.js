
//  função geradora(ou generator function)


function* gerador() {
    let i = 0
    while (i < 5) {
        yield i;
        i++;
    }
}

const g = gerador();

for (let index = 0; index < 10; index++) {
    console.log(g.next());
}