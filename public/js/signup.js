/* eslint-disable no-undef */
const signupForm = document.querySelector('.signup-form');
const signupErrorr = document.querySelector('.signup-error');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const img = e.target.image.value;

  fetchData({ username, email, password, img }, 'post', '/api/v1/signup').then((data) => {
    if (data.status === 409 || data.status === 400) {
      createMessageError(signupErrorr, data.message);
    } else {
      window.location.href = '/';
    }
  });
});
