let errorIcon = document.getElementById('error-icon');
let errorMessage = document.getElementById('error-message');

function error (e) {
	e.preventDefault();
	
	let emailValue = email.value;
	if(emailValue == ''){
		errorMessage.textContent = 'Email cannot be empty';
		errorIcon.style.display = 'block';
		errorMessage.style.display = 'block';
	} else if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue)){
		errorMessage.textContent = 'Email is invalid';
		errorIcon.style.display = 'block';
		errorMessage.style.display = 'block';			
	} else {
		document.body.innerHTML = '<div style="display:flex; align-items: center; justify-content: center;"><h1>Thank you!</h1></div>';
		setTimeout(function(){
			window.location = 'base-apparel.html';
		}, 4000);
	}
}

// console.log(document.getElementsByTagName('body')[0].textContent)

button.addEventListener('click' , error, 'false')