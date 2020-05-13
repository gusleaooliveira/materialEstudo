class Pessoa{
  construct(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  getNomeCompleto(){
    return this.nome+' '+this.sobrenome;
  }
}

let pessoa1 = new Pessoa("Gustavo", "Leão");
let pessoa2 = new Pessoa("José", "Silva");

let pessoa3 = Object.create(Pessoa);
pessoa3.nome = "Sônia";
pessoa3.sobrenome = "Leão";
pessoa3.falar = () => { return 'Falei!!!'; }

console.log(pessoa3.falar());
