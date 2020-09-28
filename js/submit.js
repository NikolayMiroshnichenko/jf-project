const form = document.querySelector('.js-form');
const formInput = [...form.elements];

form.addEventListener('submit', submitForm);
formInput.forEach(input => {

    input.addEventListener('input', (e) => {
        if(input.value !== "") {
            input.classList.remove('input-error');
        }
    }) 
});

function submitForm(e) {
    e.preventDefault();

    const userName = form.elements.name.value;
    const userEmail = form.elements.email.value;

    if(userName === "") {
        form.elements.name.classList.add('input-error');
        return
    }
    if(userEmail === "") {
        form.elements.email.classList.add('input-error');
        return;
    }
    
    const user = сreateObjectValues(userName, userEmail, form.id);
    console.log(user);
}

function сreateObjectValues (name, email, id) {
    return {
        id: id,
        name: name,
        email: email
    }
}