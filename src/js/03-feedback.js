import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const submitBtn = document.querySelector('button');

form.addEventListener('input', throttle(inputSaver, 500));

function inputSaver(event) {
  localStorage.setItem(event.target.name, event.target.value);
}

form.email.value = localStorage.getItem('email');
form.message.value = localStorage.getItem('message');

submitBtn.addEventListener('click', () => {
  let validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (form.email.value.match(validRegex)) {
    console.log(`email: ${localStorage.getItem('email')}`);
    console.log(`message: ${localStorage.getItem('message')}`);
    localStorage.clear();
    form.reset();
  } else {
    alert('Enter a valid e-mail address!');
    return;
  }
});
