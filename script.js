function calcular() {
    let altura = Number(document.getElementById("altura").value); 
    let peso = Number(document.getElementById("peso").value);
    let res = document.getElementById('resultado')
    let imc = peso / (altura * altura);

    if (altura == '' || peso == '') {
        alert('Preencha os campos corretamente')
        res.innerHTML = 'Algo de errado aconteceu... Preencha os dados corretamente e tente novamente'
       
    }


    if (imc < 18.5){
        res.innerHTML = `Seu imc é ${imc.toFixed(2)} <br>Abaixo do peso`

    }else if (imc < 24.9) {
        res.innerHTML = `Seu imc é ${imc.toFixed(2)} <br>Peso adequado`
      
    }else if (imc < 29.9) {
        res.innerHTML = `Seu imc é ${imc.toFixed(2)}<br>Sobrepeso`
        
    }else if (imc < 34.9) {
        res.innerHTML = `Seu imc é ${imc.toFixed(2)}<br>Obesidade Grau 1`
        
    }else if (imc < 39.9) {
        res.innerHTML = `Seu imc é ${imc.toFixed(2)}<br>Obesidade grau 2`
        
    }else if (imc > 39.9) {
        res.innerHTML = `Seu imc é ${imc.toFixed(2)} <br> Obesidade grau 2`
        }


    



 }
