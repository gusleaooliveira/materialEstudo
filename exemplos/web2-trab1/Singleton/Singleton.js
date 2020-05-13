let Singleton = (() => {
  let instancia;

  function criarBanco(tabela){
    let objeto = new Object();
    objeto.tabela = tabela;
    objeto.pessoas = new Array();
    objeto.inserirPessoa = (item) => {
      objeto.pessoas.push(item);
    };
    objeto.listarPessoas = (id) =>{
      if(id == undefined){ return objeto.pessoas; }
      else { return objeto.pessoas[id]; }
    };
    objeto.apagarPessoa = (id) =>{
      if(id == undefined){ return null; }
      else { objeto.pessoas.splice(id, 1); }
    };
    objeto.alterarPessoa = (id, valor) =>{
      if(id == undefined){ return null; }
      else { objeto.pessoas[id] = valor; }
    };

    return objeto;
  }

  return {
    getInstancia: (tabela) => {
      if(!instancia){
        instancia = criarBanco(tabela);
      }
      return instancia;
    }
  }

})();


let banco1 = Singleton.getInstancia('tbl_exemplo');
let banco2 = Singleton.getInstancia('tbl_exemplo');

banco1.inserirPessoa({ "nome" : "Gustavo Leão", "email": "gus.leaono@gmail.com"});
banco2.inserirPessoa({ "nome" : "Sônia Nogueira", "email": "sonia_leoa69@hotmail.com"});
banco2.inserirPessoa({ "nome" : "João ", "email": "joao_teste@gmail.com"});

console.log('Instancias iguais? '+(banco1 == banco2));
console.log(banco1.listarPessoas());
console.log(banco2.listarPessoas(0));

banco2.apagarPessoa(1);

console.log(banco1.listarPessoas());

banco2.alterarPessoa(1, { "nome" : "João Silva", "email": "joao_teste@gmail.com"});

console.log(banco2.listarPessoas());
