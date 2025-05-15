
// função construtora

const data = {
    nome: "ariel",
    add() {
        this.idade = 29
        console.log(this);
    }
}

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

}

const { idade, nome } = new Pessoa("ariel", 29);
console.log(idade);
console.log(nome);
