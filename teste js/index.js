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

function gerarnumeroaleatorio(){
    return Math.floor(math.ramdom() * 100) +1;
}
 function jogoadivinhaçao(){
    const numeroaleatorio =  gerarnumeroaleatorio ();
    let tentativasRestantes = 5;

    alert('Vamos jogar o jogo da adivinha');
    alert('Tente adivinhar um numero entre 1 e 100, voce tem 5 tentativas');
 }

 if (isNaN(palpite)) {
    alert('Digite um numero');
    continue    
}
 if(palpite === numeroaleatorio){
    alert('Parabens! voce acertou o numero em ${i} tentativas');
    return

}else if (palpite < numeroaleatorio){
    alert('tente um numero maior');
}else{
    alert('tente um numero menor');
}
tentativasRestantes--;
alert('tentativas restantes:${tentativasrestantes}');
if(tentativasRestantes ===){
    alert('sua tentativas acabaram. o numero era ${numeroaleatorio}');
    return;
 }