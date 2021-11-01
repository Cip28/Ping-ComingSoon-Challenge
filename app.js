const form=document.querySelector('.container form');
const email=document.querySelector('.email');
const errorText=document.querySelector('.error-text')
console.log(errorText);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    var emailValue=email.value;
    console.log(emailValue);
    if(!validateEmail(emailValue)){
        email.classList.add('error');
        errorText.classList.add("error");

    }else{
        email.classList.remove('error');
        errorText.classList.remove('error');
    }
});
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}