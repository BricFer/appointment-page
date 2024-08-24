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