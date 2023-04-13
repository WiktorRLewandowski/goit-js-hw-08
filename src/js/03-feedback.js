import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const submitBtn = document.querySelector('button');

form.addEventListener('input', throttle(inputSaver, 500));

function inputSaver(event) {
  localStorage.setItem(event.target.name, event.target.value);
}

form.email.value = localStorage.getItem('email');
form.message.value = localStorage.getItem('message');

submitBtn.addEventListener('click', event => {
  event.preventDefault();
  console.log(`email: ${localStorage.getItem('email')}`);
  console.log(`message: ${localStorage.getItem('message')}`);
  localStorage.clear();
  form.email.value = localStorage.getItem('email');
  form.message.value = localStorage.getItem('message');
});
