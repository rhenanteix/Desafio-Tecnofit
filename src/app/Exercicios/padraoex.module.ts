export class PadraoExModule { 
  carregar() {
    if(localStorage.getItem('exs') === null || localStorage.getItem('exs') == undefined) {
      console.log('Não há pessoas cadastradas!');
      let exs = [
        {
          id: "1",
          tipo: "Musculacao",
          session: '1',
        }, 
      ];

      localStorage.setItem('exs', JSON.stringify(exs));
      console.log(exs)
      return 
    } 
  }
}

