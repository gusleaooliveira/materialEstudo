const Singleton = require('../singleton/Singleton');

async function rodar(){
  let instancia1 = Singleton.getInstancia();

  let resposta1 = await instancia1.funcaoAssincrona(10);
  console.log(resposta1);
  console.log(instancia1);

  let instancia2 = Singleton.getInstancia();

  let resposta2 = await instancia2.funcaoAssincrona(10);
  console.log(resposta2);
  console.log(instancia2);
}

module.exports = rodar;
