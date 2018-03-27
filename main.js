/*Chiedi all'utente di inserire un numero massimo (chiamato max) e un numero
minimo (chiamato min) con due prompt diversi.
In seguito devi chiedere all'utente un numero positivo, che chiamiamo N.

Il programma dovrà generare N array, ogni array sarà formato da 10 numeri interi
 random contenuti nel range min e max.

Una volta costruiti questi array, il programma dovrà generare una lista delle
 occorrenze.Nello specifico, guardando tutti i numeri inclusi in tutti
  gli array, dovrà indicare quante volte compare ogni numero in tutti gli array.
*/

var min=parseInt(prompt("inserire un numero : "));
var max=parseInt(prompt("inserire il un numero max: "));

var N=parseInt(prompt("inserire il un numero intero: "));

//creo un array iniziale vuoto
var array=[];

for(var i=0;i<N;i++){
  array[i]=generaArray(min, max);

}
console.log(array);



function generaArray(num1, num2){
  var arr=[];
  var i=0;
  do{
    if(num1<=(Math.floor(Math.random()*num2+1))){
        arr.push(Math.floor(Math.random()*num2+1));
        i++;
    }
  }while(i<10)
  return arr;


}
