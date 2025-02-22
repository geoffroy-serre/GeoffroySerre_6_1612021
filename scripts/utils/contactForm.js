const modalBlock = document.getElementById('contact_modal');
const submitButton = document.querySelector('#btn-contact-submit');

// handleEventContactModal();

// function handleEventContactModal() {
window.addEventListener('keydown', (e) => {
	if (e.key == 'Escape') {
		closeModal(modalBlock);
	}
});
submitButton.addEventListener('click', (e) => submitContactForm(e));
submitButton.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') submitContactForm(e);
});
// }

export function displayModal(modalBlock, photographerName) {
	modalBlock.style.display = 'flex';
	displayPhotographerName(photographerName);
	modalBlock.querySelectorAll('[tabindex]:not([tabindex="-1"])')[0].focus();
}

export function closeModal() {
	modalBlock.style.display = 'none';
}

function displayPhotographerName(name) {
	const modal = document.querySelector('.modal');
	modal
		.querySelector('header')
		.querySelector('h1').innerHTML = `Contactez-moi</br>${name}`;
}

/**
 * Check for the validity of input fields, show in console inputs values, close modal and reset fields.
 * Reset and console log only if inputs are valid.
 * @param e Event
 * @param HtmlElement modalBlock
 */
export function submitContactForm(e) {
	console.log('trigger');
	e.preventDefault();
	const name = document.querySelector('#nameInput');
	const firstName = document.querySelector('#firstNameInput');
	const email = document.querySelector('#emailInput');
	const message = document.querySelector('#messageInput');

	/* 
	As there was no informations about the required validation, 
	the default validation of the input by the browser is used.
	*/

	if (
		name.checkValidity() &&
		firstName.checkValidity() &&
		email.checkValidity() &&
		message.checkValidity()
	) {
		console.log(
			`Nom: ${name.value} // Prénom: ${firstName.value} // Email: ${email.value} // Message: ${message.value}`
		);

		closeModal(modalBlock);
		document.querySelector('#contact-form').reset();
	}
}
