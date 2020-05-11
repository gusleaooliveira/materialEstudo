let Singleton = (() => {
  let instancia;

  function criarInstancia() {
    let  objeto =  new Object('Esse é um objeto!');
    objeto.fibonacci = (n) => {
      return (n -1) + (n);
    };
    objeto.funcaoAssincrona = (x) => {
      return new Promise(resolve => { setTimeout(() => { resolve(objeto.fibonacci(x)); }, 2000); });
    };
    return objeto;
  }

  return {
    getInstancia: () => {
        if(!instancia){
          instancia = criarInstancia();
        }
        return instancia;
    }
  };

})();

module.exports = Singleton;
