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
 
//function Usuario(nome) {
//    this.nome = nome;
//    this.log = function(){
//        console.log(this);
//    }
//}

//const guilherme = new Usuario("Guilherme");
//console.log(guilherme)
//Pode ser usado para a criação de novos usuarios
//---------------------------------------------------------------------------------------------------
//function Usuario(nome) {
//  this.nome = nome;
// }
    
//     const guilherme = new Usuario("Guilherme");
//     Usuario.prototype.getNome = function(){console.log(this.nome)}
//guilherme.getNome()
//pode ser usado para criar heranças entre as variaveis e funções
//---------------------------------------------------------------------------------------------------

//let Usuario = function(nome, idade) {
//    this.nome = nome;
//    this.idade = idade;
//}
//const guilherme = new Usuario("guilherme", 17 );
//const novoGuilherme = Object.create(guilherme);
//console.log(novoGuilherme instanceof Usuario)
//console.log(novoGuilherme.nome)
//---------------------------------------------------------------------------------------------------

//function Carro(cor){
//    this.cor = cor;
//    this.descricao = descricao;
//}

//Carro.prototype.pegaInformacoes = function(){
//    return this.descricao + "e a cor " + this.cor;
//}

//let meuCarro = Object.create(Carro.prototype);
//meuCarro.cor = "azul";
//console.log(meuCarro.pegaInformacoes())

//const novoCarro = Object.create(Carro, {
//  cor: {
//    writable: true, configurable: true, value: "Vermelho"
//  }, //propiedade de cor 
//descricaoPadrao: {writable: false, configurable: true, value:"Meu carro"}, //propiedades descritoras
//descricao: {
//    configurable: true,
//    get: function() {
//       return this.descricaoPadrao.toUpperCase();
//    },
//    set: function(valor){
//        this.descricaoPadrao = valor.toLowerCase()
//    }
//}
//})
//novoCarro.descricaoPadrao = 'Nova descrição'
//console.log(novoCarro.descricao)
//---------------------------------------------------------------------------------------------------
//const alvo = {a: 1, b: 2}
//const dados = {b: 5, c: 4}
//const resultado = Object.assign({}, alvo, dados); //o dado que foi colocado por ultimo sobrepõem os outros iguais a ele 
//console.log(resultado);
//---------------------------------------------------------------------------------------------------
//dados = [{nome: 'Caramelo', idade: 3, tipo: 'cachorro'}, 
//{nome: 'Rex', idade: 6, tipo: 'cachorro'}, 
//{nome: 'Bolota', idade: 1, tipo: 'gato'}, 
//{nome: 'Thor', idade: 3, tipo: 'cachorro'}]

//const cachorros = dados.filter((dado, index /*posição do dado que quer alterar*/) => dado.tipo === 'cachorro');
//console.log(cachorros) //filtra as opções que contém a informção passada
//const idadeReal = cachorros.map((cachorro) => ({nome: cachorro.nome, idade:cachorro.idade * 7 })) //map intera por cada resultado, podendo manipular e alterar as informações do Array
//console.log(idadeReal)
//const totalIdades = idadeReal.reduce((soma = 0, dado) => {
//  return soma + dado.idade   
//}, 0);
//console.log(totalIdades)
//---------------------------------------------------------------------------------------------------
//const alphabeto = new Set(['a', 'b', 'c', 'd']) //não da para adicionar dados de mesmo valor 
//alphabeto.add('e') //adiciona
//alphabeto.delete('a') //deleta

//const dados = new Map([['nome' /*key*/ ,'guilherme'/*dado da key*/],['idade', 17]])
//console.log(dados.get('nome'))
//dados.forEach((dado,chave) => console.log(dado,chave))
//---------------------------------------------------------------------------------------------------
//function *interaGenerator(total){ //* importante 
//    for(let i = 1; i <= total; i++){
//        yield console.log(i) //yield funciona como um return, porém não finaliza a ação após ser executado
//    }
//}

//const totalGenerator = interaGenerator(5);
//totalGenerator.next()
//totalGenerator.next()

//function *interaGenerator(total){ 
//    for(let i = 1; i <= total; i++){
//        yield i 
//    }
//}

//const totalGenerator = interaGenerator(5);
//console.log(totalGenerator.next().value)
//---------------------------------------------------------------------------------------------------

//const dado = false;

//const confirmaçãoDeDado = new Promise((resolve, reject) => {
//    if(dado) {
//        resolve(true);
//    } else {
//        reject(false)
//    }
//});

//const segundaconfirmaçãoDeDado = (resultado) => {
//    return new Promise((resolve)=> {
//        if (resultado){
//            resolve("Os dados estão corretos");
//        } else {
//            resolve('Os dados não estão corretos')
//        }
//    })
//}
//confirmaçãoDeDado.then(correto => {
//    console.log("correto")
//}).catch(errado => {
//    console.log("Errado")
//})

//confirmaçãoDeDado
//.then(segundaconfirmaçãoDeDado)
//.catch(segundaconfirmaçãoDeDado)
//.then(resultado => console.log(resultado))
//---------------------------------------------------------------------------------------------------
//let dado = true;

//const confirmaçãoDeDado = new Promise((resolve, reject) => {
//    if(dado) {
//        resolve(true);
//    } else {
//        reject(false)
//    }
//});

//const segundaconfirmaçãoDeDado = (resultado) => {
//    return new Promise((resolve)=> {
//        if (resultado){
//            resolve("Os dados estão corretos");
//        } else {
//            resolve('Os dados não estão corretos')
//        }
//    })
//}

//async function indoParaOBancoDeDados(){
//    try {
//        const dado = await confirmaçãoDeDado;
//        const mensagem = await segundaconfirmaçãoDeDado(dado);
//        console.log(mensagem);
//    } catch (nãoAchou) {
//        const mensagem = await segundaconfirmaçãoDeDado(nãoAchou)
//        console.log(mensagem);
//    }
//}

//indoParaOBancoDeDados()
//---------------------------------------------------------------------------------------------------

//const pilha = [];
//pilha.unshift(0);
//pilha.unshift(1);
//console.log(pilha)
//pilha.unshift(2);
//pilha.unshift(3);
//pilha.shift()//inverte a ordem
//console.log(pilha)

//const pilha = []
//pilha.push(0);
//pilha.push(1);
//console.log(pilha)
//pilha.push(2);
//pilha.push(3);
//pilha.shift() //tira o primeiro
//console.log(pilha)

//const pilha = []
//pilha.push(0);
//pilha.push(1);
//console.log(pilha)
//pilha.push(2);
//pilha.push(3);
//pilha.pop() //tira o ultimo 
//console.log(pilha)
//---------------------------------------------------------------------------------------------------

//const dados = [0,1,2,3,4,5,6,7,8,9]
//dados.pop() //só é feito uma operação

//function o_n(entrada, numero) {
//    for(let  i = 0, max = entrada.length; i < max ; i++){
//        if(entrada[i] === numero){
//            return i
//        }
//    }
//    return -1; 
//}
//console.log(o_n(dados,2))

//function o_n_quadrado(entrada){
//    const matriz = [];
//    for(let i = 0, max = entrada.length; i < max; i++ ){
//        matriz[i] = [];
//        for(let j =  0, maxj = entrada.length; j < maxj; j++){
//            matriz[i].push(i);
//        }
//    }
//    return matriz;
//}
//console.log(o_n_quadrado(dados))
//const entrada = ['q', 'a', 'z', 'w', 's', 'x', 'e', 'd', 'c', 'r'];
//function quickSort(entrada){
//    if(entrada.length < 2){
//      return  entrada;
//    }
//    let pivo = entrada[0];
//    let esquerda = [];
//    let direita = [];
//    console.log(pivo);
//    for(let i = 1, max = entrada.length; i < max; i++){
//       if( entrada[i] < pivo){
//            esquerda.push(entrada[i])
//        }else{
//            direita.push(entrada[i])
//        }
//    }
//    console.log(esquerda, direita);
//    return[...quickSort(esquerda), pivo,...quickSort(direita)];
//}
//console.log(quickSort(entrada))
//---------------------------------------------------------------------------------------------------
//class forma {
//    desenhar(){
//        console.log("Eu sou uma forma")
//    }
//}

//class Triangulo extends forma{}

//class Circulo extends forma {
//    desenhar(){
//        console.log("Eu sou um circulo")
//    }
//}

//const formas = [new forma(), new Triangulo(), new Circulo];
//formas.forEach(forma => forma.desenhar())
//---------------------------------------------------------------------------------------------------
    //const carro = {
    //    tracao: '4x4',
    //    ligar(){
    //        return 'ligou'; 
    //    }
    //}
    //const meuCarro = Object.create(carro, {dono: {value: 'Gabriel'}})
    //carro.__proto__.desligar = function(){
    //    return 'desligou';
    //}
    // console.log(meuCarro.ligar());   
     // console.log(meuCarro.desligar()); 
    //pode ajudar nas permissões de cada usuario onde estão postas em bancos de dados
    //---------------------------------------------------------------------------------------------------   
    //class subject {
    //    constructor(){
    //        this.observadores = [];
    //    } //Array que guarda todos os observaveis/referencia aos objetos criados
    //    assinarObservavel(observador){
    //       this.observadores.push(observador); 
    //    }
    //    notificarObsevador(observador){
    //        const index = this.observadores.indexOf(observador);
    //        if(index > -1) {
    //            this.observadores[index].notificar(index);
    //        }else{
    //           console.log('Esse observador não existe')
    //        }
    //    }
    //    notificarTodosObservadores(){
    //        this.observadores.forEach((observador, index) => observador.notificar(index))
    //    }
   // }

    //class Observer {
    //    notificar(index) {
    //        console.log(`observador ${index} foi notificado`)
    //    }//recebe a notificação do index 
    //}

    //const Subject = new subject(); //cria a referencia de 4 observadores
    //const observador0 = new Observer();
    //const observador1 = new Observer();
    //const observador2 = new Observer();
    //const observador3 = new Observer();

    //assina os observadores
    //Subject.assinarObservavel(observador0);
    //Subject.assinarObservavel(observador1);
    //Subject.assinarObservavel(observador2);
    //Subject.assinarObservavel(observador3); 

    //Subject.notificarObsevador(observador1);
    //Subject.notificarTodosObservadores();
//---------------------------------------------------------------------------------------------------  
//const impressora = (function(){
//   let instanciaDaImpressora;
   
//   function criar(){
//    function imprimir(){
//        console.log('impimindo')
//    }
//    function ligar() {
//        console.log('ligando imprressora')
//    }
//    return {imprimir, ligar}
//   }
//   return{
//    pegarInstancia: function(){
//       if(!instanciaDaImpressora){
//        instanciaDaImpressora = criar();
//       }
//       return instanciaDaImpressora;
//    }
//   }
//})()
    
//const impressoraDaEmpresa1 = impressora.pegarInstancia();
//const impressoraDaEmpresa2 = impressora.pegarInstancia();
//impressoraDaEmpresa1.ligar();
//console.log(impressoraDaEmpresa1)
//console.log(impressoraDaEmpresa1 === impressoraDaEmpresa2)
//---------------------------------------------------------------------------------------------------  
//function lista(juncao, ...itens){
//    const separadoPorVirgula = itens.slice(0, -1).join(', ');
//    const ultimoIntem = itens.pop();
//    return `${separadoPorVirgula} ${juncao} ${ultimoIntem}`;
//}

//function parcial(funcao, juncao) {
//    return(...itens) => {
//        return funcao(juncao, ...itens)
//    }
//}
//const listaE = parcial(lista, 'e');
//const listaOu = parcial(lista, 'ou');
//const listaTalvez = parcial(lista, 'talvez')

//console.log(listaE('e', 'azul', 'amarelo', 'verde'));
//console.log(listaOu('e', 'azul', 'amarelo', 'verde'));
//console.log(listaTalvez('e', 'azul', 'amarelo', 'verde'));
//--------------------------------------------------------------------------------------------------- 