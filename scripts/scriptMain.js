// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.querySelector('#save');
//     button.disabled = true;
// });

//document.querySelector('.fc-event-time').innerHTML  me da el valor de las horas de los eventos que se crean en el calendario.
//Appointment info variables
let appointmentDate;
let appointmentTime;
let appointmentLocation = '';
let appointmentName;
let appointmentLastName;
let appointmentPhone;
let appointmentEmail;

//Variables para los parametros del boton
let save = 'save';
let modify = 'modify';
let saveText = 'Guardar';
let modifyText = 'Modificar';

// DOM
let inputsLocation = document.querySelectorAll('.location__info input');
let locationSection = document.querySelectorAll('.location__option');
let locationContainer = document.querySelector('.location__info');


/*LOCATION */
inputsLocation[0].addEventListener('click', ()=> {
    removeTextArea();
    removeButton();
    createButton(save,saveText);
});

inputsLocation[1].addEventListener('click', ()=> {
    removeButton();
    createTextArea();
    createButton(save,saveText);
})

const saveLocation = (input) => {

    let inputId = input.getAttribute('id');

    if(inputId === 'onsite') {
        appointmentLocation = input.nextElementSibling.textContent;
    } else {
        emptyField();
    }
}

const createButton = (id, text) => {
    let button = document.createElement('button');
    button.setAttribute('type','button');
    button.setAttribute('class','btn');
    button.setAttribute('id',`${id}`);
    button.textContent=`${text}`;
    locationContainer.appendChild(button);

    button.addEventListener('click', () => {

        inputsLocation.forEach((input) => {
            if (input.checked) {
                saveLocation(input);
                createElement(input);
            }
        });

    });
}

const removeButton = () => {
    let lastChildId = locationContainer.lastElementChild.getAttribute('id');
    if(lastChildId === 'save' || lastChildId === 'modify') {
        document.querySelector(`#${lastChildId}`).remove();
    }
}
const createElement = (input) => {
    let  element = document.createElement('p');
    let inputId = input.getAttribute('id');
    let parentElement = document.querySelector(`#${inputId}`).parentElement;

    element.setAttribute('class',  'modifyElement');
    element.textContent = "Modificar";
    parentElement.appendChild(element);
}
const createTextArea = () => {
    removeTextArea();
    //Elements
    let textArea = document.createElement('textarea');
    let title = document.createElement('h3');
    let locationDetails = document.createElement('div');
    
    //Attributes
    textArea.setAttribute('class','newLocation__text');
    textArea.setAttribute('maxlength','150');
    title.setAttribute('class', 'title');
    locationDetails.setAttribute('id', 'newLocation');

    //Additional info
    title.textContent = 'Nueva dirección'

    //Append
    locationDetails.appendChild(title);
    locationDetails.appendChild(textArea);
    locationContainer.appendChild(locationDetails);
}

const removeTextArea = () => {
    let nextElement = locationSection[1].nextElementSibling;
    if(nextElement != null) {
        let siblingElementId = locationSection[1].nextElementSibling.getAttribute('id');
        document.querySelector(`#${siblingElementId}`).remove();  
    }
}

const emptyField = () => {
    let emptyFieldCheck = document.querySelector('.newLocation__text').value;

    if(emptyFieldCheck==='') {
        alert('Has indicado "Otra ubicación", por favor indica la dirección');
    } else {
       appointmentLocation = document.querySelector('.newLocation__text').value;
        document.querySelector('.newLocation__text').disabled = true;
    }
}