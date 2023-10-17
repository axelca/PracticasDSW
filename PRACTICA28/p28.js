
const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
alert(diasSemana[0]);
alert(diasSemana.length);
diasSemana.push('NuevoDía');
alert(diasSemana); 
diasSemana.pop();
alert(diasSemana);

var i=1;
var suma=0;
while(suma<15){
    alert(i)
    suma=suma+i
    i++
    
}
alert(suma);

let numero = 5;
let factorial = 1;
do {
  factorial *= numero;
  numero--;
} while (numero > 0);
alert(factorial)
