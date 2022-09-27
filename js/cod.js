function tab(){
     let altura, peso, imc, classificacao;
     altura = document.getElementById("altura").value;
     peso = document.getElementById("peso").value;
     imc = (peso/(altura*altura)).toFixed(2);

     if(imc < 18.5){
          classificacao = "Você está abaixo do peso";
     }else if(imc > 18.5 && imc < 25){
          classificacao = "Você está no peso ideal (parabéns)";
     }else if(imc > 24.9 && imc < 30){
          classificacao = "Você está levemente acima do peso";
     }else if(imc > 29.9 && imc < 35){
          classificacao = "Você está com obedidade de grau I";
     }else if(imc > 34.9 && imc < 40){
          classificacao = "Você está com obedidade de grau II (severa)";
     }else if(imc > 39.9){
          classificacao = "Você está com obedidade de grau III (mórbida)";
     }else{
          classificacao = "Insira os valores";
     }

     const tbody = document.querySelector("tbody");
     const tr = document.createElement("tr");
     const td1 = document.createElement("td");
     const td2 = document.createElement("td");
     const td3 = document.createElement("td");
     const td4 = document.createElement("td");

     td1.innerText = altura;
     td2.innerText = peso;
     td3.innerText = imc;
     td4.innerText = classificacao;

     tr.appendChild(td1);
     tr.appendChild(td2);
     tr.appendChild(td3);
     tr.appendChild(td4);

     tbody.appendChild(tr);

}