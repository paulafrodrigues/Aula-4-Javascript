const satanas = {
    nome: 'Satanás',
    idade: 6, //data de nascimento!
    castrado: true,
    cores: ['preto', 'branco']
  };
  
  const churrumina = {
    nome: 'Churrumina',
    idade: 1,
    castrado: true,
    cores: ['branca', 'creme', 'cinza']
  };
  
  const odo = {
    nome: 'Odo',
    idade: 2,
    castrado: true,
    cores: ['branco', 'marrom', 'preto']
  };
  
  const ford = {
    nome: 'Ford Prefect',
    idade: 3,
    castrado: true,
    cores: ['rajado']
  };
  
  const gatos = [satanas, churrumina, odo, ford]
  
//   //ITERANDO COM FOR OF
  
//   for (let gato of gatos) {
//       // console.log(gato)
//       console.log(gato.nome)
//   }
  
//   for (let gato of gatos) {
//       if (gato.castrado) {
//           console.log(gato.nome)
//       }
//   }
  
//   for (let gato of gatos) {
//       console.log(gato.cores) //imprime dentro das arrays
//       for (let cor of gato.cores) {
//           console.log(cor)
//       }
//   }
  
//   //ITERANDO COM FOR IN
  
//   for (let caracteristica in ford){
//       console.log(caracteristica, ford[caracteristica])
//   }
  
//   //alterando objetos:
  
//   const pessoa = {
//       nome: "Juliana",
//       idade: 38,
//       gatos: ["Satanás"]
//   }
  
//   console.log(pessoa)
//   pessoa.cabelo = "azul"
//   console.log(pessoa)
  
//   pessoa.gatos.push("Churrumina")
//   console.log(pessoa)

for (let gato of gatos){
    console.log(gato.nome)
    for(let cor of gato.cores){
        console.log(cor)
        
    }
    console.log('---------------')
}
  
  // imprimir lista de cores por gato, no formato
  // nome do gato
  //cor
  //-------------