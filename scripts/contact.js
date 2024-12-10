document.querySelector('form').addEventListener('submit', function(event){
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const inquiry = document.getElementById('inquiry').value.trim();

    if (!name || !email || !inquiry){
        event.preventDefault(); // prevents user from submitting form
        alert('All fields are required!');
    } else if (!validateEmail(email)){
        event.preventDefault();
        alert('Please enter a valid email!');
    }
});

function validateEmail(email){
    const validationEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validationEmail.test(string(email).toLowercase());
}
