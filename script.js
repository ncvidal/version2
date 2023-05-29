//COMENZAMOS PRIMERO CREANDO LAS VARIABLES//
//ESTOS SON LOS CAMPOS DONDE ESTAREMOS TRABAJANDO//

const textArea =document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"//
//La letra "i" es convertida para "imes"//
//La letra "a" es convertida para "ai"//
//La letra "o" es convertida para "ober"//
//La letra "u" es convertida para "ufat"//



function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""; // para que el area que recibe el texto se limpie//
    mensaje.style.backgroundImage = "none";//para quitar la imagen cuando se encripte//
    var imagen = document.getElementById('imagen');
    imagen.style.display = "none";
}

function encriptar(stringEncriptada){
    var matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase()


    //aca estamos trabajando el reemplazo de la llaves de encriptación//

    for(var i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}




// seccion desencriptar//


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""; // para que el area que recibe el texto se limpie//
    mensaje.style.backgroundImage = "none";//para quitar la imagen cuando se encripte//

    var imagen = document.getElementById('imagen');
    imagen.style.display = "none";
}


function desencriptar(stringDesencriptado){
    var matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesencriptado=stringDesencriptado.toLowerCase()
    for(var i =0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return stringDesencriptado
}


function copiarTexto(){
     var textoACopiar = document.querySelector(".mensaje");
     textoACopiar.select();
     document.execCommand("copy");
     
}

//document.querySelector("#copy").addEventListener("click", copy);















//const btnCopiar = document.querySelector(".copiar");

    //btnCopiar.addEventListener("click", copiar =() => {
    //var contenido = document.querySelector(".mensaje").textContent;
    //navigator.clipboard.writeText(contenido);
    //})
