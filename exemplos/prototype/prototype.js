let Singleton = (() =>{
  let instancia;

  function setInstancia(nome){
    let objeto = new Object({"nome" : nome, "pulo": false, "pular": () => {
      this.pulo = !this.pulo;
    }});
    return objeto;
  }

  return {
      getInstancia: (nome)=>{
        if (!instancia){
          instancia = setInstancia(nome);
        }
        return instancia;
      }
  };
})();

function main(){
  let instancia1 = Singleton.getInstancia('Gustavo');
  instancia1.pular();
  let instancia2 = Singleton.getInstancia('Sônia');

  console.log("Mesma instância?", (instancia1 == instancia2));


  console.log();
  console.log("Objeto1:", instancia1);
  console.log("Objeto2:", instancia2);

}

main();
