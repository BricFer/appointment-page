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
    removeArea('#newLocation');
    createTextArea(inputsLocation[1]);
})
/*INPUTS */
const createTextArea = (inputElement) => {
    let inputId = inputElement.getAttribute('id'); 
    let parentElement = document.querySelector(`#${inputId}`).parentElement;
    
    parentElement.insertAdjacentHTML('afterend',`
        <textarea id="newLocation" class="newLocation__text input" maxlength="150" placeholder="Introduce la nueva dirección" required></textarea>`);
}

const removeArea = (element) => {
    let checkedIfExist = document.querySelector(`${element}`);
    
    if(checkedIfExist != null) {
        checkedIfExist.remove();  
    }
}

const emptyFieldsChek = (input) => {
    let inputValue = input.value;
    let inputMandatory = input.getAttribute('required');
    let siblingElement = input.nextElementSibling;
    
    if(siblingElement !== null) {
        siblingElement.remove();
    }
    if((inputValue === "" ||  inputValue === "default") && inputMandatory!== null) {
        input.insertAdjacentHTML('afterend', `
            <p class="mandatory__text"><sup>*</sup>Este campo es obligatorio</p>`);
    }
}

btn.addEventListener('click', () =>
    
    inputs.forEach((input) => {
        
        emptyFieldsChek(input);
    })
)