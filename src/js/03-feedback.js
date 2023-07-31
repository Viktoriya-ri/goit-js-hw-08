import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const LS_KEY = 'feedback-form-state';

const refs = {
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
}
refs.addEventListener('input', throttle(onInputData, 500));
refs.addEventListener('submit', onFormSubmit);

let dataForm = {
  email: '',
  message: '',
};

reloadPage();

function onInputData(evt) {
  dataForm[evt.target.name] = evt.target.value;
  localStorage.setItem(LS_KEY, JSON.stringify(dataForm))
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
