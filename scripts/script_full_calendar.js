// document.addEventListener('DOMContentLoaded', () => {
//     let calendarEl = document.getElementById('calendar');
//     let calendar = new FullCalendar.Calendar(calendarEl, {
//         initialView: 'dayGridMonth'
//     });

// calendar.render();
// });

/*Con esta función nos aseguramos que el DOM está completamente cargado antes de ejecutar el script. */
document.addEventListener('DOMContentLoaded', () => {

    let calendarEl = document.getElementById('calendar');

    /*Crea una instancia de FullCalendar.Calendar y pasa el elemento del DOM donde se quiere renderizar el calendario (calendarEl) */

    let calendar = new FullCalendar.Calendar(calendarEl, {

        initialView: 'timeGridWeek',

        /*Habilita la selección de fechas y horas en el calendario */
        selectable: true,

        /*Esta opción define las restricciones para la selección.
        startTime: '09:00' y endTime: '17:00': Permite selecciones solo entre las 9:00 AM y las 5:00 PM.
        dow: [ 1, 2, 3, 4, 5 ]: Permite selecciones solo de lunes a viernes (1 es lunes y 5 es viernes, siguiendo la convención de FullCalendar). Este valor y los dos anteriores han de ir uno tras otro para su correcta renderización*/
        selectConstraint: {
            startTime: '08:00', // Horas de inicio permitidas
            endTime: '17:00', // Horas de fin permitidas
            dow: [ 1, 2, 3, 4, 5 ] // Días de la semana permitidos (Lunes a Viernes)
        },

        /*Con los slotMin y slotMax le digo que, ese intervalo horario, es lo que quiero que se muestre*/
        slotMinTime: '08:00:00', // Hora de inicio de las franjas horarias
        slotMaxTime: '18:00:00', // Hora de fin de las franjas horarias
        slotDuration: '00:30:00', // Intervalo de tiempo en el que se crean los eventos 01:00:00 el evento dura una hora. 00:30:00 el evento que se crea dura 30min
        slotLabelInterval: '01:00', // Intervalo de tiempo visible, solo es posible colocar valores de 30min o de hora en hora
       
        /*La opción validRange se utiliza para definir el rango de fechas válidas en el calendario.
        
        El parámetro nowDate en la función validRange es proporcionado automáticamente por FullCalendar y representa la fecha y hora actuales en el momento en que se está configurando el rango válido para el calendario. Este parámetro se utiliza para definir dinámicamente el rango de fechas válidas en función de la fecha y hora actuales.*/
        validRange: (nowDate) => {
            
            return {
                start: nowDate, // Esto deshabilita todos los días anteriores a hoy
                end: (nowDate) => {
                    let endDate = new Date(nowDate);
                    endDate.setMonth(endDate.getMonth() + 2);
                    return endDate;
                }
            };
        },

        dayHeaderContent: (arg) => {

            /*otros formatos:
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true // Configura para usar el formato de 12 horas en lugar del de 24*/

            // Personalizar la visualización del encabezado de los días
            const formatter = new Intl.DateTimeFormat('es-ES', {
                month: 'short',
                day: '2-digit',
            });
            return {
                html: `<b>${formatter.format(arg.date)}</b>` // Formato de fecha personalizada
            };
        },

        slotLabelFormat: {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        },
        
        select: (info) => {

            let title = prompt('Ingrese el título de la cita:');

            if (title) {
                calendar.addEvent({
                    title: title,
                    start: info.startStr,
                    end: info.endStr,
                    allDay: info.allDay
                });
            }
            calendar.unselect();
        },

        /*Si deseo permitir que los usuarios eliminenalgún evento puedo añadir este fragmento de código, sin embargo, tal y como está cualquiera puede eliminar el evento */
        // eventClick: (info) => {
        //     if (confirm('¿Desea eliminar esta cita?')) {
        //         info.event.remove();
        //     }
        // }
    });

    calendar.render();
});