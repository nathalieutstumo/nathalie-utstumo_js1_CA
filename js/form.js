
const submit = document.querySelector('#submit');

const firstNameError = document.querySelector('.firstNameError');
const lastNameError = document.querySelector('.lastnameError');
const emailError = document.querySelector('.emailError');
const adressError = document.querySelector('.adressError');


submit.onclick = function (event) {
	
	event.preventDefault();

	const firstName = document.querySelector('#firstname').value.trim();
	const lastName = document.querySelector('#lastname').value.trim();
    const email = document.querySelector('#email').value.trim();
    const adress = document.querySelector('#adress').value.trim();

	if (firstName.length > 1) {
		firstNameError.classList.add('hide');
		firstNameError.classList.remove('show');
	} else {
		firstNameError.classList.add('show');
		firstNameError.classList.remove('hide');
	}

	if (lastName.length > 3) {
		lastNameError.classList.add('hide');
		lastNameError.classList.remove('show');
	} else {
		lastNameError.classList.add('show');
		lastNameError.classList.remove('hide');
	}

	if (validateEmail(email)) {
		emailError.classList.add('hide');
		emailError.classList.remove('show');
	} else {
		emailError.classList.add('show');
		emailError.classList.remove('hide');
    }

    if (adress.length > 25) {
		adressError.classList.add('hide');
		adressError.classList.remove('show');
	} else {
		adressError.classList.add('show');
		adressError.classList.remove('hide');
	}
};

function validateEmail(emailAdress) {
	const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isEmailValid = emailExpression.test(emailAdress);
    console.log(isEmailValid);
	return isEmailValid;
}


