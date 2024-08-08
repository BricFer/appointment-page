//DOM
let whatsapp = document.querySelector('#whatsapp');

//Constantes para crear la ruta y el mensaje de WhatsApp
const wpMessage = "¡Hola!\nEsto es una prueba de mensaje integrando WhatsApp a la web";
const wpPhone = "+34987654321";

//encodeURIComponent(); se utiliza para codificar una URI (Uniform Resource Identifier) de manera que todos los caracteres especiales se conviertan en un formato seguro para ser utilizados en una URL. Este formato seguro es conocido como percent-encoding o URL encoding, y es necesario para garantizar que los datos se transmitan correctamente a través de la web.
let mensajeCodificado = encodeURIComponent(wpMessage);
let numeroCodificado = encodeURIComponent(wpPhone);
const url ="https://wa.me/"+numeroCodificado+"?text="+mensajeCodificado;

//.setView([latitud, longitud], zoom) , acá van las coordenadas de la ubicación
/*
    Nivel de zoom 0: Muestra el mapa del mundo entero.
    Nivel de zoom 5: Muestra continentes y grandes regiones.
    Nivel de zoom 10: Muestra ciudades y áreas metropolitanas.
    Nivel de zoom 13: Muestra detalles de calles y vecindarios
    Nivel de zoom 16-19: Muestra detalles muy finos, como edificios individuales y características específicas de la calle. (este es el nivel usado en este script).
*/
const map = L.map('map').setView([36.7315207, -4.4288949], 16); // Reemplaza con la latitud y longitud deseada

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//.marker([latitud, longitud]) , acá van las coordenadas de la ubicación
//.bindPopup('Texto que se muestra en un popup dentro del mapa')
L.marker([36.7315207, -4.4288949]).addTo(map).bindPopup('Example location.').openPopup();

whatsapp.addEventListener('click', () => {
    window.location.href=url;
})