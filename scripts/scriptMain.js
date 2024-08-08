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
let formContainer = document.querySelector('.form');
let btn = document.querySelector('.save');
let inputs = document.querySelectorAll('.input');
let inputsLocation = document.querySelectorAll('.location__option input');


/*LOCATION */
inputsLocation[0].addEventListener('click', ()=> {
    removeArea('#newLocation');
});

inputsLocation[1].addEventListener('click', ()=> {
    removeArea();
    createTextArea(inputsLocation[1]);
})
/*INPUTS */
const createTextArea = (input) => {
    let inputId = input.getAttribute('id'); 
    let parentElement = document.querySelector(`#${inputId}`).parentElement;
    //Elements
    let textArea = document.createElement('textarea');
    let title = document.createElement('h3');
    let locationDetails = document.createElement('div');
    
    //Attributes
    textArea.setAttribute('class','newLocation__text input');
    textArea.setAttribute('maxlength','150');
    textArea.attributes.required = 'required';
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

const emptyFieldsChek = (input) => {

}