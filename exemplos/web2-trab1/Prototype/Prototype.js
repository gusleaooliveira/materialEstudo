function Pessoa(nome, sobrenome, email, telefone){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.email = email;
  this.listaEmails = [];

  this.nomeCompleto = () => {
    return this.nome+' '+this.sobrenome;
  }
  this.mandarEmail = (pessoa, titulo, conteudo) => {
    pessoa.listaEmails.push(
      {
        "email": this.email,
        "titulo": titulo,
        "conteudo": conteudo
      });
  }
  this.listarEmails = () => {
    return this.listaEmails;
  }
}


let pessoa1 = new Pessoa("Eliane", "Francisca Ayla Moura", "elianefranciscaaylamoura_@focusnetworks.com.br");
let pessoa2 = new Pessoa("Bryan", "Pedro Lopes", "bryanpedrolopes..bryanpedrolopes@gmailo.com");
let pessoa3 = new Pessoa("Manuel", "Vinicius Baptista", "manuelviniciusbaptista-71@outlock.com.br");
let pessoa4 = Object.create(Pessoa);
pessoa4.nome = "Fabiana";
pessoa4.sobrenome = "Melissa Marcela Moraes";
pessoa4.email = "fabianamelissamarcelamoraes..fabianamelissamarcelamoraes@bsd.com.br";
pessoa4.telefone = "(51) 99999-9999"


console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa3.telefone);

pessoa1.mandarEmail(pessoa2, "Boas Vindas", "Olá, seja bem-vinda, prazer!");

console.log(pessoa2.listarEmails());
