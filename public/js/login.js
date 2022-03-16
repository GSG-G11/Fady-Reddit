/* eslint-disable no-undef */
const signupForm = document.querySelector('.login-form');
const loginError = document.querySelector('.login-error');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  fetchData({ email, password }, 'post', '/api/v1/login').then((data) => {
    if (data.status !== 200) {
      createMessageError(loginError, data.message);
    } else {
      window.location.href = '/';
    }
  });
});
