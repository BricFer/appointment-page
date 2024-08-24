//DOM
let whatsapp = document.querySelector('#whatsapp');

//Constantes para crear la ruta y el mensaje de WhatsApp
const wpMessage = "¡Hola!\nEsto es una prueba de mensaje integrando WhatsApp a la web";
const wpPhone = "+34987654321";

//encodeURIComponent(); se utiliza para codificar una URI (Uniform Resource Identifier) de manera que todos los caracteres especiales se conviertan en un formato seguro para ser utilizados en una URL. Este formato seguro es conocido como percent-encoding o URL encoding, y es necesario para garantizar que los datos se transmitan correctamente a través de la web.
let mensajeCodificado = encodeURIComponent(wpMessage);
let numeroCodificado = encodeURIComponent(wpPhone);
const url ="https://wa.me/"+numeroCodificado+"?text="+mensajeCodificado;

whatsapp.addEventListener('click', () => {
    window.location.href=url;
})