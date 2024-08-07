const start = () => {

    /*La función gapi.client.init es utilizada para inicializar el cliente de la API de Google con las credenciales y configuraciones necesarias. Configura el cliente para que pueda realizar solicitudes a las APIs de Google de manera segura y con las credenciales adecuadas. 
    
    gapi.client es una parte específica de la biblioteca de APIs de Google y debe llamarse de esa manera para que la biblioteca funcione correctamente. No se puede cambiar su nombre arbitrariamente, ya que gapi es el namespace global que la biblioteca de Google API utiliza para exponer sus métodos y propiedades.

    gapi: Es el namespace global proporcionado por la biblioteca de APIs de Google. Al cargar la biblioteca, se define gapi en el ámbito global del navegador.

    gapi.client: Es un módulo dentro de gapi que contiene métodos y propiedades para interactuar con las APIs de Google de manera cliente. Este módulo maneja la autenticación, las solicitudes y las respuestas.*/
    gapi.client.init({

        /*La clave API de Google, que autoriza a la aplicación acceder a las APIs de Google. */
        'key': 'AIzaSyBJPG5SJwc7Ci14tuOwJk_eUMPT-PgmD2E',  // API Key

        /* Una lista de URLs que especifican los documentos de descubrimiento para las APIs que se desean utilizar. Estos documentos contienen información sobre las APIs, incluyendo los puntos finales, los métodos disponibles y las estructuras de los datos. */
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']


    }).then(() => {
        
        /*Después de inicializar el cliente, se realiza una solicitud a la API de Google Calendar para obtener una lista de eventos. */
        return gapi.client.calendar.events.list({

            /*La solicitud especifica parámetros como el calendarId, el timeMin (fecha y hora mínimas para los eventos), showDeleted (si se deben mostrar eventos eliminados), singleEvents (si se deben mostrar eventos individuales) y maxResults (el número máximo de eventos a devolver). */
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime'
        });

        
        /*La función then() recibe como argumento response, que es el objeto de respuesta de la solicitud a la API de Google Calendar.
        
        El valor del parámetro response proviene de la llamada a la API de Google Calendar que se realiza en el método then dentro de la función start().*/
    }).then((response) => {

        /*response.result.items contiene un array de objetos de eventos obtenidos de la API de Google Calendar. Este array se almacena en la variable events. */
        let events = response.result.items;

        /*Obtiene una referencia a un elemento del DOM con el id appointment. Este elemento debe existir en el HTML para que JavaScript pueda interactuar con él y colocar allí el contenido deseado (en este caso, las franjas horarias libres) */
        let calendarDiv = document.getElementById('appointment');


        /*Comprueba si el array events contiene algún evento. Si hay eventos, se procede a procesarlos y mostrarlos. */
        if (events.length > 0) {

            /*Recorre cada evento del array events y almacena el evento actual en la variable event.*/
            for (let i = 0; i < events.length; i++) {
                let event = events[i];

                /*Obtiene la fecha y hora de inicio del evento del campo dateTime del objeto event.start. */
                let when = event.start.dateTime;

                /*Si dateTime no está presente (lo que puede ocurrir si es un evento de todo el día), se usa event.start.date como la fecha de inicio. */
                if (!when) {
                    when = event.start.date;
                }

                /*Crea un nuevo elemento div para mostrar el evento. */
                let listItem = document.createElement('div');

                /*Establece el contenido de texto del div con el resumen del evento (event.summary) y su fecha/hora de inicio (when). */
                listItem.textContent = event.summary + ' (' + when + ')';
                calendarDiv.appendChild(listItem);
            }
        } else {
            calendarDiv.textContent = 'No upcoming events found.';
        }
    }).catch(function(error) {
        console.error('Error fetching calendar events: ' + error.message);
    });
}

gapi.load('client', start);