function imc(){
     let altura, peso, imc;
     altura = document.getElementById("altura").value;
     peso = document.getElementById("peso").value;
     imc = (peso/(altura*altura)).toFixed(2);
     document.getElementById("resp").innerText = "Resposta do cálculo " + imc;
}