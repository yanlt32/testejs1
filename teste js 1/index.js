//let numero1 = 5;
//let numero2 = 15;

//let resultado = numero1 + numero2;

//alert(resultado);

// let numero1 = 5;
// let numero2 = 55;
// let numero3 = 60;
// let numero4 = 35;

// let media =(numero1 + numero2 + numero3 + numero4) / 4;

// alert(media);

// let numero1 = parseFloat(prompt('Digite seu peso:')); 
// let numero2 = parseFloat(prompt('Digite seu altura:')); 

// let IMC = (numero1 / numero2) ** 2;
// alert(IMC.toFixed(2));

// let numero = parseInt(prompt('Digite um numero:'));
// if( numero % 2 === 0){
//     alert('O numero é par');
// } else{
//     alert('O numero é impar')
// }

// let numero1 = parseFloat(prompt('Digite um numero:')); 
// let numero2 = parseFloat(prompt('Digite outro numero:')); 

// if(numero1 == numero2){
//     alert('os numeros nao são iguais ');
// }else{
//     alert('os numeros nao são iguais');
// }

// let numero1 = prompt('Digite um numero de 1 a 10:'); 
// let numero2 = prompt('Digite um numero de 1 a 10:'); 

// if(numero1 == numero2){
//     alert('os numeros são iguais'
//     )
// }else{
//     alert(
//         'Os numeros são diferentes'
//     )
// }

// let numero1 = 7;
// let numero2 = 10;
// let numero3 = 15;

// let estaEntre = numero1 > numero2 && numero1 < numero3;

// alert('O numero está entre');

// let celsius = parseFloat(prompt('Termperatura em graus Celsius'));

//  let fahrenheit =( celsius * 1.8) + 32;
//  alert(fahrenheit + 'A temperatura em fahrenheit é:');

// const quilometros = parseFloat(prompt('Digite o Km'));

// const centrimetros = quilometros * 100000;
// const metros = quilometros * 1000;

// const mensagem = 'centimetros' + centrimetros + 'metros' + metros;

// alert(mensagem)

// let idade = parseFloat(prompt("Digite a idade:"));
// let altura = parseFloat(prompt("Digite a altura (em metros):"));

// if (idade >= 12 && altura >= 120) {
//   alert("Parabéns! Você pode brincar no brinquedo!");
// } else {
//   alert("Desculpe, você não atende aos requisitos mínimos para brincar no brinquedo");
// }

// let idadeUser = 20;
// let maioridade = 18;

// if(idadeUser >= maioridade){
//     let CNH =true;
//     if( CNH ){
//         alert('voce é maior de idade e possui carteira de habilitação');
//     }else{
//         alert('voce é maior de idade, mas nao possui carteira de hanbilitação')
//     }
// }

// for (
//     let i = 0; i < 10; i++){
//         console.log(i);
//     }

// let i = 0;
// while ( i < 100){
//     console.log(i);
//     i++;
// }

// function gerarnumeroaleatorio(){
//     return Math.floor(math.ramdom() * 100) +1;
// }
//  function jogoadivinhaçao(){
//     const numeroaleatorio =  gerarnumeroaleatorio ();
//     let tentativasRestantes = 5;

//     alert('Vamos jogar o jogo da adivinha');
//     alert('Tente adivinhar um numero entre 1 e 100, voce tem 5 tentativas');
//  }

//  if (isNaN(palpite)) {
//     alert('Digite um numero');
//     continue    
// }
//  if(palpite === numeroaleatorio){
//     alert('Parabens! voce acertou o numero em ${i} tentativas');
//     return

// }else if (palpite < numeroaleatorio){
//     alert('tente um numero maior');
// }else{
//     alert('tente um numero menor');
// }
// tentativasRestantes--;
// alert('tentativas restantes:${tentativasrestantes}');
// if(tentativasRestantes ===){
//     alert('sua tentativas acabaram. o numero era ${numeroaleatorio}');
//     return;
//  }

// let idade = 18
// let informacao

// parseFloat(prompt(informacao + 'Informe sua idade'));

// if(idade > 18){
// alert('Você é maior de idade e só pode entrar com o responsavel');}
// else if(idade > 22){
//     alert('Você é maior de idade e tem permissão para entrar no evento!');
// }else(idade < 18);{
//     alert('Você é menor de idade e não tem permissão para entrar no evento!')
// }

// function verificarAcesso(idade) {
//     if (idade >= 18) {
//         console.log("Você é maior de idade e tem permissão para entrar no evento!");
//     } else {
//         console.log("Você é menor de idade e não tem permissão para entrar no evento!");
//     }
// }

// const idades = [22, 16, 18, 29];

// idades.forEach(idade => {
//     console.log("Idade:", idade);
//     verificarAcesso(idade);
//     console.log(); // Adiciona uma linha em branco para melhorar a legibilidade dos resultados
// });

// let idade = parseFloat(prompt('Informe sua idade?'));

// if(idade >= 18){
//     alert("Você é maior de idade e tem permissão para entrar no evento!");
// }else{
//     alert("Você é menor de idade e não tem permissão para entrar no evento!");
// }

// let idade = console.log('Informe sua idade?');

// if(idade >= 18){
//     console.log("Você é maior de idade e tem permissão para entrar no evento!");
// }else{
//     console.log("Você é menor de idade e não tem permissão para entrar no evento!");
// }

// let nota = parseFloat(prompt('Informe a nota do aluno'));

// if(nota >= 7){
//     alert('Aprovado');
// }else if(nota >= 5){
//     alert('Recuperação')
// }else{
//     alert('Reprovado')
// }

// let preco = parseFloat(prompt('Informe o valor do produto'));

// if(preco >= 100){
//     alert('RECEBEU UM DESCONTO DE 10%');
// }else if(preco >= 50) / 100 * 5{
//     alert('RECEBEU UM DESCONTO DE 5%');
// }else{
//     alert('ESSE PRUDUTO NAO TEM DESCONTO');
// }

// let peso = parseInt('Fale seu peso');
// let altura = parseInt('Fale sua altura');
// let imc = peso /(altura * altura );

//     if (imc < 18.5) {
//         alert( "Abaixo do peso");
//     } else if (imc >= 18.5 && imc < 25) {
//         alert("Peso normal");
//     } else if (imc >= 25 && imc < 30) {
//         alert("Sobrepeso");
//     } else () {
//         alert("Obeso");
//     }

// let celsius = parseFloat(prompt('Termperatura em graus Celsius'));

// let fahrenheit = (celsius * 9/5) + 32;{
//     alert('Sua temperatura em fahremheit é:' + fahrenheit);
// }


// let Produto = prompt('Digite o nome do produto que deseja:');
// let categoria = prompt('Digite a categoria do produto (alimentos, bebidas ou destinado a limpeza):');
// let quantidade = prompt('Digite a quantidade atual em seu estoque:');

// if (Produto && categoria && quantidade) {
//     let quantidadeEstoque = parseInt(quantidade);
//     let Minimo = 0;

//     switch (categoria) {
//         case 'alimentos':
//             Minimo = 50;
//             break;
//         case 'bebidas':
//             Minimo = 75;
//             break;
//         case 'limpeza':
//             Minimo = 30;
//             break;
//         default:
//             alert('Categoria de produto inválida.');
//             break;
//     }

//     if (quantidadeEstoque < Minimo) {
//         alert(`Solicitar ${Produto} à equipe de compras, temos apenas ${quantidadeEstoque} em estoque.`);
//     } else {
//         alert(`${Produto} está com estoque adequado.`);
//     }
// } else {
//     alert('Por favor, preencha todas as informações corretamente.');
// }

// let dia = prompt('Digite um numero de 1 a 7 para saber o nome do dia da semana:');

// let noemdia;

// switch(dia){
//     case'1':
//     noemdia = 'Domingo';
//     break;
//     case'2':
//     noemdia = 'Segunda-feira';
//     break;
//     case'3':
//     noemdia = 'Terça-feira';
//     break;
//     case'4':
//     noemdia = 'Quarta-feira';
//     break;
//     case'5':
//     noemdia = 'Quinta-feira';
//     break;
//     case'6':
//     noemdia = 'Sexta-feira';
//     break;
//     case'7':
//     noemdia = 'Sábado';
//     break;
//     default:
//     noemdia = 'Dia inválido';
//     break;
// }

// alert(noemdia);

// for (let i = 0; i < 10; i++){
//     if(i === 5){
//         break; // interrompe o loop
//     }
//     alert(i);
// }
// let day0fweek = 3;

// switch (day0fweek){
//     case 1:
//     console.log ('Segunda-feira');
//     break;
//     case 2:
//     console.log ('Terça-feira');
//     break;
//     case 3:
//     console.log ('Quarta-feira');
//     break;
//     default:
//         console.log('Dia inválida'); // será executado quando day0week não for 1, 2 ou 3
// }

// let cliente = prompt('Para ter ao nosso desconto informe qual tipo de cliente você é?  Exemplo: Padrão, premium e VIP');
// let v = parseFloat(prompt('Digite o valor da compra?'));

// let n;


// switch(cliente){
//     case'Padrão':
//     n = v * 0.9 +'Parabéns você é um cliente Padrão no nosso estabelecimento, você acabou de ganhar 10% na sua compra'
//     break;
//     case'Premium':
//     n = 'Parabéns você é um cliente Premium no nosso estabelecimento, você acabou de ganhar 20% na sua compra';
//     break;
//     case'VIP':
//     n = 'Parabéns você é um cliente VIP no nosso estabelecimento, você acabou de ganhar 30% na sua compra';
//     break;
//     default:
//     n = 'Coloque o nome de acordo com exemplo';
//     break;
// }
// alert(n);

// Definindo os coeficientes de dificuldade para cada nível

// let tipoJogador = prompt("Digite o tipo de jogador (fácil, médio ou difícil): ");
// let valorTotal =
//     parseFloat(prompt("Digite o número de pontos ganhos:"));
// let valorFinal;
// switch (tipoJogador) {
//     case "fácil":
//         valorFinal = valorTotal * 1 ;
//     case "Fácil":
//         valorFinal = valorTotal * 1;
//     case "Facil":
//         valorFinal = valorTotal * 1;
//     case "facil":
//         valorFinal = valorTotal * 1;

//         break;
//     case "médio":
//         valorFinal = valorTotal * 2;
//     case "Médio":
//         valorFinal = valorTotal * 2;
//     case "medio":
//         valorFinal = valorTotal * 2;
//     case "Medio":
//         valorFinal = valorTotal * 2;
//         break;
//     case "difícil":
//         valorFinal = valorTotal * 3;
//     case "Difícil":
//         valorFinal = valorTotal * 3;
//     case "dificil":
//         valorFinal = valorTotal * 3;
//     case "Difícil":
//         valorFinal = valorTotal * 3;
//         break;
//     default:
//         alert("Tipo de Cliente inválido!");
// }
// if (valorFinal) {
//     alert("Valor total de pontos: " +
//         valorFinal.toFixed(0));
// }

// // Solicita ao usuário um número
// const numero = parseInt(prompt("Digite um número:"));

// // Verifica se o número é válido
// if (!isNaN(numero)) {
//     // Calcula o resto da divisão por 2
//     const resto = numero % 2;

//     // Utiliza o switch para determinar se o número é par ou ímpar
//     switch (resto) {
//         case 0:
//             alert(`${numero} é um número par.`);
//             break;
//         case 1:
//             alert(`${numero} é um número ímpar.`);
//             break;
//         default:
//             alert("Algo deu errado na verificação.");
//     }
// } else {
//     alert("Por favor, digite um número válido.");
// }

// Solicita ao usuário a idade
// const idade = parseInt(prompt("Digite a idade da pessoa:"));

// Verifica se a idade é válida
// if (!isNaN(idade)) {
//     // Utiliza o switch para determinar a faixa etária
//     switch (true) {
//         case idade >= 0 && idade <= 11:
//             alert("A pessoa é uma criança.");
//             break;
//         case idade >= 12 && idade <= 17:
//             alert("A pessoa é um adolescente.");
//             break;
//         case idade >= 18 && idade <= 59:
//             alert("A pessoa é um adulto.");
//             break;
//         case idade >= 60:
//             alert("A pessoa é um idoso.");
//             break;
//         default:
//             alert("Idade fora do intervalo válido.");
//     }
// } else {
//     alert("Por favor, digite uma idade válida.");
// }
// Solicita ao usuário um número
// const numero = parseInt(prompt("Digite um número:"));

// // Verifica se o número é válido
// if (!isNaN(numero)) {
//     let contadorPares = 0;

//     // Loop para iterar pelos números de 1 até o número inserido
//     for (let i = 1; i <= numero; i++) {
//         // Verifica se o número é par
//         if (i % 2 === 0) {
//             contadorPares++;
//         }
//     }

//     alert(`Entre 1 e ${numero}, existem ${contadorPares} números pares.`);
// } else {
//     alert("Por favor, digite um número válido.");
// }

// const operacao = prompt('Selecione um operacional para você realizar o cálculo. Exemplo: (soma, subtração, multiplicação ou divisão)');
// const numero1 = parseFloat(prompt('Escolha o primeiro numero:'));
// const numero2 = parseFloat(prompt('Escolha o segundo numero:'));
// let resultado;
// switch (operacao) {
//     case "soma":
//         resultado = numero1 + numero2;
//         break;
//     case "subtração":
//         resultado = numero1 - numero2;
//         break;
//     case "multiplicação":
//         resultado = numero1 * numero2;
//         break;
//     case "divisão":
//         resultado = numero1 / numero2;
//         break;
//     default:
//         alert('Coloque o operacional de acorodo com os exemplos!!!');

// }

// if (resultado !== undefined) {
//     alert(`O resultado da ${operacao} entre ${numero1} e ${numero2} é: ${resultado}`);
// }
// Solicitar ao usuário um número e um limite
// let numero = parseInt(prompt("Digite um número para a tabela de multiplicação:"));
// let limite = parseInt(prompt("Digite o limite da tabela de multiplicação:"));

// // Verificar se os valores fornecidos são válidos
// if (isNaN(numero) || isNaN(limite)) {
//     alert("Por favor, digite números válidos.");
// } else {
//     // Gerar e exibir a tabela de multiplicação
//    console.log("Tabela de multiplicação do " + numero + " até " + limite + ":");

//     for (var i = 1; i <= limite; i++) {
//         var resultado = numero * i;
//        console.log(numero + " x " + i + " = " + resultado);
//     }
// }
// Solicitar ao usuário um número para verificar se é primo
// let numero = parseInt(prompt("Digite um número para verificar se é primo:"));

// // Verificar se o número é um inteiro positivo maior que 1
// if (numero > 1 && Number.isInteger(numero)) {
//     let isPrimo = true;

//     // Verificar se o número é divisível por algum número diferente de 1 e ele mesmo
//     for (let i = 2; i <= Math.sqrt(numero); i++) {
//         if (numero % i === 0) {
//             isPrimo = false;
//             break;
//         }
//     }

//     // Usar um switch para mostrar o resultado
//     switch (isPrimo) {
//         case true:
//             alert(numero + " é um número primo.");
//             break;
//         case false:
//             alert(numero + " não é um número primo.");
//             break;
//     }
// } else {
//     alert("Por favor, insira um número inteiro positivo maior que 1.");
// }
// Solicitar ao usuário um número para iniciar a contagem regressiva
// let numero = parseInt(prompt("Digite um número para iniciar a contagem regressiva:"));

// // Verificar se o número é um inteiro positivo
// if (parseInt(numero) && numero >= 0) {
//     console.log("Contagem regressiva a partir de " + numero + ":");

//     // Loop de contagem regressiva
//     for (let i = numero; i >= 0; i--) {
//         console.log(i);
//     }
// } else {
//     console.log("Por favor, insira um número inteiro positivo.");
// }
// let nota = parseFloat(prompt("Digite a nota:"));

// if (!isNaN(nota) && nota >= 0 && nota <= 10) {
//     let classificacao;

//     if (nota >= 9) {
//         classificacao = "A";
//     } else if (nota >= 8) {
//         classificacao = "B";
//     } else if (nota >= 7) {
//         classificacao = "C";
//     } else if (nota >= 6) {
//         classificacao = "D";
//     } else if (nota >= 5) {
//         classificacao = "E";
//     } else {
//         classificacao = "F";
//     }

//     alert("A nota " + nota + " é classificada como: " + classificacao);
// } else {
//     alert("Por favor, insira uma nota válida entre 0 e 10.");
// }
//Solicitar ao usuário um número
// let numero = parseInt(prompt("Digite um número:"));

// //Verificar se o número é válido
// if (!isNaN(numero) && numero > 0) {
//     for (let i = 1; i <= numero; i++) {
//         let linha = '';

//         for (let j = 1; j <= i; j++) {
//             linha += '*';
//         }

//         console.log(linha);
//     }
// } else {
//     console.log("Por favor, insira um número válido maior que 0.");
// }
