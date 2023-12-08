//const timeout = setTimeout(() => {alert('set timout')}, 2000)

//setTimeout(() => {clearTimeout(timeout)} , 1500)

//const interval = setInterval(() => {console.log("teste")}, 1000)
//setTimeout(() => {clearInterval(interval)}, 5000)

//let contador = 0;
//let loop = requestAnimationFrame(animation);

//function animation() {
//contador += 1;
//console.log(contador)
//loop = requestAnimationFrame(animation);
//}

//setTimeout(() => {cancelAnimationFrame(loop)}, 5000);
//-------------------------------------------------------------------------------------------------
//class animal {
//    constructor(pes){
//        this.pes = pes
//    }
//    quantidadePes(){
//        console.log("E tenho " + this.pes + " pés/patas")
 //   }
//}



//const Mamifero = class extends animal {
//   constructor(nome, som, pes){
//        super(pes);
//        this.nome = nome
//        this.som = som
//    }
//    
//    emitirSom(){
//        console.log("Esse animal faz " + this.som)
//    }
//}

//const cachorro =  new Mamifero("cachorro", "au au", 4)

//cachorro.emitirSom();
//cachorro.quantidadePes();
//pode ser usado para login, onde é adicionado informações
//---------------------------------------------------------------------------------------------------

//const dados = {nome: "guilherme"}
//const saudacao = function(idade){
//    console.log(`Bem vindo ${this.nome}, sua idade é de ${idade} anos`)
//}

//saudacao.call(dados, 28)
//Pode ser usado para mensagem instântanea 

//const dados = {nome: "guilherme"}
//const argumentos = [ 12]
//const saudacao = function(idade){
//    console.log(`Bem vindo ${this.nome}, sua idade é de ${idade} anos`)
//}

//saudacao.apply(dados, argumentos)

//const dados = {nome: "guilherme"}
//const saudacao = function(idade){
//    console.log(`Bem vindo ${this.nome}, sua idade é de ${idade} anos`)
//}

//const bound = saudacao.bind(dados)

//bound(47)
//---------------------------------------------------------------------------------------------------