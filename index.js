const form = document.getElementById('contact-form');
const confirmationMessage = document.getElementById('confirmation');
const errorMessage = document.getElementById('error');

function validateForm(event) {
    
    event.preventDefault();

    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    
    if (name !== '' && email !== '' && message !== '') {
        
        confirmationMessage.style.display = 'block';
        errorMessage.style.display = 'none';

        
        setTimeout(() => {
            form.reset();
            confirmationMessage.style.display = 'none';
        }, 3000);
    } else {
        
        errorMessage.style.display = 'block';
        confirmationMessage.style.display = 'none';
    }
}


form.addEventListener('submit', validateForm);