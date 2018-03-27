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

//istruzione che trova le occorrene di ogni numero compreso fra min e max,
//usando la funzione trovaoccorrenze
}
for (var i = min; i <= max; i++) {
console.log("Il numero: " + i + " compare " + trovaOccorrenza(array, i));
}


//funzione che riceve in ingresso due numeri min, max e genera un array di interi
//con elementi compresi nel range min-max
function generaArray(num1, num2){
  var arr=[];
  var i=0;

  do{
    var k=(Math.floor(Math.random()*num2+1));
    if(num1<=k){
        arr.push(k);
        i++;
    }
  }while(i<10)
  return arr;
}

//funzione che trova tutte le occorrenze delle variabili
function trovaOccorrenza(array, num){
  var counter=0;
  for(var i=0;i<array.length;i++){
    for(var j=0;j<array[i].length;j++){
    if(array[i][j]==num){
      counter++;
    }
  }

  }
  return counter;
}
