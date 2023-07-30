import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const LS_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LS_KEY)) || {};

const { email, message } = form.elements;
reloadPage();

function onInputData(evt) {
  dataForm = { email: email.value, message: message.value };
}

function reloadPage() {
  if (localStorage.getItem(LS_KEY)) {
    email.value = dataForm.email || '',
      message.value = dataForm.message || '';
  };
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });
  if (email.value === '' || message.value === '') {
    return alert('Please fill  in all the fields!');
  }

  localStorage.removeItem(LS_KEY);
  evt.currentTarget.reset();
  dataForm = {};
}
