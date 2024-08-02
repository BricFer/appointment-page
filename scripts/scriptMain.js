//document.querySelector('.fc-event-time').innerHTML  me da el valor de las horas de los eventos que se crean en el calendario.
//Appointment info variables
let appointmentDate;
let appointmentTime;
let appointmentLocation = '';
let appointmentName;
let appointmentLastName;
let appointmentPhone;
let appointmentEmail;

// DOM
let inputs = document.querySelectorAll('.input');
let inputsLocation = document.querySelectorAll('.location__info input');
let locationSection = document.querySelectorAll('.location__option');
let locationContainer = document.querySelector('.location__info');


/*LOCATION */
inputsLocation[0].addEventListener('click', ()=> {
    removeArea('#newLocation');
    removeButton(locationContainer);
    createSaveButton();
});

inputsLocation[1].addEventListener('click', ()=> {
    removeButton(locationContainer);
    removeArea();
    createTextArea(inputsLocation[1]);
    createSaveButton();
})

/*BUTTONS */
const createSaveButton = () => {
    let button = document.createElement('button');
    button.setAttribute('type','button');
    button.setAttribute('class','btn save');
    button.textContent=`Guardar`;
    locationContainer.appendChild(button);

    button.addEventListener('click', () => {

        inputsLocation.forEach((input) => {
            if (input.checked) {
                let inputId = input.getAttribute('id');
                
                if(inputId==='onsite') {
                    appointmentLocation = input.nextElementSibling.textContent;
                } else if (inputId === 'outdoors') {
                    input.parentElement.nextElementSibling.classList.add('hidden');
                }
                createModifyElement(input);
            }
            removeButton(locationContainer);
            inputDesactivation(input);
        });

    });
}

/*GENERAL ACTIONS */
const inputActivation = (input) => {
    input.disabled = false;
}
const inputDesactivation = (input) => {
    input.disabled = true;
}

const removeButton = (parent) => {
    let checkedIfBtnExist = parent.querySelector('.save');

    if(checkedIfBtnExist != null) {
        checkedIfBtnExist.remove();  
    }
}

/*ELEMENTS */
const createModifyElement = (input) => {
    let element = document.createElement('p');
    let inputId = input.getAttribute('id');
    let parentElement = document.querySelector(`#${inputId}`).parentElement;

    
    element.setAttribute('class',  'modifyElement');
    element.textContent = "Modificar";
    parentElement.classList.add('editable__field');
    parentElement.appendChild(element);

    element.addEventListener('click', () => {
        element.remove();
        modifySection(parentElement);

        if(inputId==='outdoors') {
            input.parentElement.nextElementSibling.classList.remove('hidden');
        }
    })
}
/*INPUTS */
const createTextArea = (input) => {
    let inputId = input.getAttribute('id'); 
    let parentElement = document.querySelector(`#${inputId}`).parentElement.parentElement;
    //Elements
    let textArea = document.createElement('textarea');
    let title = document.createElement('h3');
    let locationDetails = document.createElement('div');
    
    //Attributes
    textArea.setAttribute('class','newLocation__text input');
    textArea.setAttribute('maxlength','150');
    title.setAttribute('class', 'title');
    locationDetails.setAttribute('id', 'newLocation');

    //Additional info
    title.textContent = 'Nueva dirección'

    //Append
    locationDetails.appendChild(title);
    locationDetails.appendChild(textArea);
    parentElement.appendChild(locationDetails);
}

const removeArea = (element) => {
    let checkedIfExist = document.querySelector(`${element}`);
    
    if(checkedIfExist != null) {
        checkedIfExist.remove();  
    }
}

/*Cosas por hacer :
    * Deshabilitar los input:radio para que no se pueda elegir otra opción a menos que se clique modificar. [DONE]
    * Cuando le damos a modificar tiene que desaparecer el texto 'modificar' hasta que se vuelva a clicar en guardar. [DONE]
    * Quitar el "Modificar" cada vez que se haga click en "Guardar" para que no se cree texto infinito [DONE]
    * Esconder el boton guardar cuando se clique guardar. [DONE]
    * Se debe habilitar el "otra ubicación" en caso que ese sea el campo que se eligió anteriormente [DONE]
    * Cambiar  el alert por un mensaje bajo el campo que indique que es obligatorio.
    * Asegurarme que el boton guardar no desaparesca hasta que no se haya guardado una dirección válida.
*/

const modifySection = (parent) => {
    createSaveButton();
    parent.classList.remove('editable__field');
        
    for(let i=0; i<inputsLocation.length; i++) {
        inputActivation(inputsLocation[i]);
    }
}