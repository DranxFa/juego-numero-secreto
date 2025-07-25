let numeroSecreto = 0;
let intentos = 0;
let listaNumerosAleatorios = [];
let numeroMaximo = 10;

function asignarTextoElemento(element, texto){
  let elemento = document.querySelector(element);
  elemento.textContent = texto;
  return;
}

function asignarNumeroAleatorio() {
  let numero = Math.floor(Math.random()*numeroMaximo)+1;

  console.log(numero);
  console.log(listaNumerosAleatorios);

  if (listaNumerosAleatorios.length == numeroMaximo){
    asignarTextoElemento('p', 'Se sortearon todos los numeros, reiniciando...');
    setTimeout(() => {
      listaNumerosAleatorios = [];
      reiniciar();
    }, 3000);
  } else{
    if (listaNumerosAleatorios.includes(numero)){
      return asignarNumeroAleatorio();
    } else {
      listaNumerosAleatorios.push(numero);
      return numero;
    }
  }
}

function validarIntento(){
  let numeroUsuario = parseInt(document.getElementById('valor-usuario').value);
  
  if (numeroUsuario === numeroSecreto){
    asignarTextoElemento('p', `Acertaste el número. Lo hiciste en ${intentos} ${(intentos==1)? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El numero secreto es menor');
    } else {
      asignarTextoElemento('p', 'El numero secreto es mayor');
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function condicionalesIniciales(){
  asignarTextoElemento('h1', 'Juego del número secreto')
  asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`)
  intentos=1;
  numeroSecreto=asignarNumeroAleatorio();
}

function limpiarCaja(){
  document.querySelector('#valor-usuario').value = '';
}


function reiniciar(){
  limpiarCaja();
  condicionalesIniciales()
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionalesIniciales();
/*
console.log(promedio(4, 6, 8));
console.log((mayor(10,40)));
console.log(cuadrado(5));

function cuadrado(numero){
  return numero*numero;
}

function mayor(numero1, numero2) {
  return numero1>numero2 ? numero1 : numero2;
}

function promedio(numero1, numero2, numero3) {
  return (numero1+numero2+numero3)/3;
}

tablaMultiplicar(5);

function tablaMultiplicar(numero){
  
  let i = 0;
  while (i<=12) {
    console.log(`${i}*${numero} = ${i*numero}`);
    i++;
  }
}
*/


