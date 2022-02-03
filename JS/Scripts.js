function ExibeMensagem(){
    document.getElementById("campo1").innerHTML = "Ola mundo!";
}

function Soma(){
    var pNumero = document.querySelector("#pNumero");
    var pNumeroint = parseInt(pNumero.value);
    var sNumero = document.querySelector("#sNumero");
    var sNumeroint = parseInt(sNumero.value);
    var result = pNumeroint + sNumeroint;
    document.getElementById("result").innerHTML = result;
    alert(result)
    if (result > 10){
        alert("Número maior que 10!")
    }
}

function Multiplicacao(){
    var pNumero = document.querySelector("#pNumero");
    var pNumeroint = parseInt(pNumero.value);
    var sNumero = document.querySelector("#sNumero");
    var sNumeroint = parseInt(sNumero.value);
    var result = pNumeroint * sNumeroint;
    document.getElementById("result").innerHTML = result;
    alert(result)
    if (result > 5){
        alert("Número maior que 5!")
    }
}

function Subtracao(){
    var pNumero = document.querySelector("#pNumero");
    var pNumeroint = parseInt(pNumero.value);
    var sNumero = document.querySelector("#sNumero");
    var sNumeroint = parseInt(sNumero.value);
    var result = pNumeroint - sNumeroint;
    document.getElementById("result").innerHTML = result;
    alert(result)
    if (result > 15){
        alert("Número maior que 15!")
    }
    
}

function ConcatenaNome(){
    var pNome = document.querySelector("#pNome");
    var pNomet = pNome.value;
    var sNome = document.querySelector("#sNome");
    var sNomet = sNome.value;
    var concatenado = pNomet + ' ' + sNomet;
    document.getElementById("nomeConcat").innerHTML = concatenado;
    alert(concatenado)
    if (result > 15){
        alert("Número maior que 15!")
    }
    
}