function imprimir(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var n3 = parseInt(document.getElementById("n3").value);
    var n4 = parseInt(document.getElementById("n4").value);
    var n5 = parseInt(document.getElementById("n5").value);
    var n6 = parseInt(document.getElementById("n6").value);
    var n7 = parseInt(document.getElementById("n7").value);
    var n8 = parseInt(document.getElementById("n8").value);
    var cali =(n1+n2+n3+n4+n5+n6+n7+n8)/8
     if( cali => 85 ){
        alert(cali + " felicidades aprobaste el semestre")
    }else {
        alert(cali + " lastima reprobaste el semestre")
    }
}

