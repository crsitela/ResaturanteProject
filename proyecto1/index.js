const form =document.querySelector('#contact_form');
const inputName = document.querySelector('#name_input');

const inputEmail=document.querySelector('#email_input');

const inputNumber=document.querySelector('#telephone_input');

const inputTime
= document.querySelector('#date_input');
const inputDate
= document.querySelector('#subject_input');

const pResult
= document.querySelector('#resultado');

const btn =document.querySelector('#summit')

btn.addEventListener('click',btnOnCick);

function btnOnCick(event){
    
    
   //vent.preventDefault();
    
    const sumaInputesName
    = inputName.value;
    
    const sumaInputesEmail
    = inputEmail.value;
    
    const sumaInputesNumber
    =  inputNumber.value;
    
    const sumaInputesTime
    =  inputTime.value;
    
    const sumaInputesDate
    =  inputDate.value;
    
    pResult.innerText="Nombre:" + sumaInputesName
    + " " + "Email:" + " "+ sumaInputesEmail + " " +
   "Telefone" + " " + " " +sumaInputesNumber + " " +
    "Date Time:" + " "+ sumaInputesTime + " " +
    "Ocasiones:" + sumaInputesDate;
    
   

    
}

