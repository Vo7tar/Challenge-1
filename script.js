/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/ 
var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var personaje = document.querySelector(".caja-personaje");
var contenedor = document.querySelector(".contenedor-informacion");
var resultado = document.querySelector(".texto-final");


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    Ocultar();
    var cajatexto = recuperarTexto() 
    if (!minusculasySinAcentos(cajatexto)){
        return;
    }
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    Ocultar();
    var cajatexto = recuperarTexto()
    if (!minusculasySinAcentos(cajatexto)){
        return;
    }
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".caja-texto")
    return cajatexto.value
}

function Ocultar(){
    personaje.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const botonCopiar = document.querySelector(".boton-copiar"); 
    botonCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-final").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});

/* Funcion Texto minusculas y caracteres especiales */

function minusculasySinAcentos(cajatexto) {
    const errorMessage = document.querySelector(".mensaje-error");

    if (!/^[a-z\s]+$/.test(cajatexto)) {
        errorMessage.textContent = alert("Error: Solo se permiten letras minúsculas y sin acentos.");
        return false;
    }

    errorMessage.textContent = ''; 
    return true;
}