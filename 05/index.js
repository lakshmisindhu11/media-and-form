const signUpForm = document.getElementById('sign-up-form');
const signInForm = document.getElementById('sign-in-form');

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirm-password').value.trim();
  const age = document.getElementById('age').value.trim();
  const gender = document.getElementById('gender').value.trim();
  const termsAndConditions = document.getElementById('terms-and-conditions').checked;

  if (firstName === '') {
    document.getElementById('first-name-error').innerHTML = 'First name is required';
  } else {
    document.getElementById('first-name-error').innerHTML = '';
  }

  if (lastName === '') {
    document.getElementById('last-name-error').innerHTML = 'Last name is required';
  } else {
    document.getElementById('last-name-error').innerHTML = '';
  }

  if (email === '') {
    document.getElementById('email-error').innerHTML = 'Email is required';
  } else if (!validateEmail(email)) {
    document.getElementById('email-error').innerHTML = 'Invalid email';
  } else {
    document.getElementById('email-error').innerHTML = '';
}
})