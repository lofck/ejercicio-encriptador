document.addEventListener('DOMContentLoaded', function () {
    //SE ENCARGA DE EJECUTAR EL CODIGO UNA VEZ SE HAYA CARGADO COMPLETAMENTE EL HTML

    const inputUsuario = document.getElementById('texto-1');
    const inputUsuario2 = document.getElementById('texto2');
    const botonCifrar = document.querySelector('.encriptar');
    const botonDescifrar = document.querySelector('.desencriptar');

    //FUNCIONES QUE SE EJECUTAN AL TOCAR EL BOTON "ENCRIPTAR"

    const cifrado = ["ai", "enter", "imes", "ober", "ufat"];

    function cifrarTexto(texto) {
        let textoCifrado = "";
        for (let i = 0; i < texto.length; i++) {
            let letra = texto[i];
            //INDEXOF DEVUELVE LA POSICION DE LA VOCAL, SI NO LO ES, DEVUELVE -1
            let vocal = "aeiou".indexOf(letra);
            if (vocal !== -1) {
                textoCifrado += cifrado[vocal];

            } else {
                textoCifrado += letra;
            }

        }
        return textoCifrado;
    }

    /*CREO UN STRING VACIO, LUEGO EJECUTO UN FOR EL CUAL SE EJECUTA MIENTRAS "I" SEA MENOR A LA PALABRA QUE PASO POR PARAMETRO.
    GUARDO CADA LETRA EN LA VARIABLE "LETRA", LUEGO EN "VOCAL" GUARDO DICHA LETRA, COMPRUEBO CON INDEOF QUE SEA VOCAL,
     SI LO ES, SE CAMBIA POR SU VARIANTE CIFRADA Y LO GUARDO EN "TEXTOCIFRADO"*/

    botonCifrar.addEventListener('click', function () {
        let textoOriginal = inputUsuario.value;
        // Verificar si el texto contiene letras con tilde
        if (/[áéíóúÁÉÍÓÚ]/.test(textoOriginal)) {
            alert("El texto debe contener solo letras minúsculas sin tilde.");
        } else if (/[ÁÉÍÓÚÜA-Z]/.test(textoOriginal)) {
            alert("El texto debe contener solo letras minúsculas sin tilde.");
        } else {
            let textoCifrado = cifrarTexto(textoOriginal);
            inputUsuario2.value = textoCifrado;
        }
    });

    /* ESPERO UN CLICK, LUEGO CREO UNA FUNCION QUE GUARDA LO INGRESADO POR EL USUARIO EN "textoOriginal", CON UN IF ELSE
    VERIFICO QUE SE CUMPLA LAS FUNCIONES DE QUE NO SE INGRESEN MAYUS NI TILDES, SI ESO SE VERIFICA, PASO textoOriginal COMO
    PARAMETRO A LA FUNCION cifrarTexto*/

    //FIN FUNCIONES ENCRIPTAR

    //INICIO FUNCION DESENCRIPTAR

    function descifrarTexto(textoCifrado) {
        let textoDescifrado = textoCifrado;
        for (let i = 0; i < cifrado.length; i++) {
            let palabraCifrada = cifrado[i];
            let letraOriginal = "aeiou"[i];
            let regex = new RegExp(palabraCifrada, 'g');
            textoDescifrado = textoDescifrado.replace(regex, letraOriginal);
        }
        return textoDescifrado;
    }

    botonDescifrar.addEventListener('click', function () {
        let textoCifrado = inputUsuario2.value;
        let textoDescifrado = descifrarTexto(textoCifrado);
        inputUsuario2.value = textoDescifrado;
    });

    //PROXIMAMENTE HARE UNA ACTUALIZACION DEL CODIGO, AGREGANDO EL BOTON DE COPIAR Y MEJORANDO LA FUNCION DESENCRIPTAR

});
