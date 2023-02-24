const formEl = document.querySelector('.login-form');
const inputEmail = document.querySelector('[name="email"]');
const inputPassword = document.querySelector('[name="password"]');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const emailValue = formElements.email.value;
    const passwordValue = formElements.password.value;
    const formData ={
        emailValue,
        passwordValue,
    }

    if (emailValue === '' || passwordValue === '') {
        window.alert('Enter all data!')
    }else(console.log(formData))
    formEl.reset();
}