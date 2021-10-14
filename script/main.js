let buttonHamb = document.querySelectorAll('nav img')[1];
let buttonClose = document.querySelectorAll('nav img')[2];
let navBar = document.querySelector('nav ul');
buttonHamb.onclick = () => {
  buttonHamb.classList.toggle('hide');
  buttonClose.classList.toggle('hide');
  navBar.classList.add('show');
};
buttonClose.onclick = () => {
  buttonHamb.classList.toggle('hide');
  buttonClose.classList.toggle('hide');
  navBar.classList.remove('show');
};
window.addEventListener('scroll', () => {
  if (window.scrollY >= 250 && navBar.classList.contains('show')) {
    buttonClose.click();
  }
});

let slider = document.querySelectorAll('.what-said .persons div');
let bullets = document.querySelectorAll('.what-said .persons ul li');
let i = 1;
setInterval(() => {
  removeAllEffects();
  slider[i].classList.add('slide');
  bullets[i].classList.add('active');
  if (i == 0) {
    slider[i + 1].style.transform = `translateX(-110%)`;
    slider[i].style.transform = `translateX(0)`;
    slider[i].style.transform = `scale(1.1)`;
    slider[slider.length - 1].style.transform = `translateX(110%)`;
  } else if (i == slider.length - 1) {
    slider[0].style.transform = `translateX(-110%)`;
    slider[i].style.transform = `translateX(0)`;
    slider[i].style.transform = `scale(1.1)`;
    slider[i - 1].style.transform = `translateX(110%)`;
  } else {
    if (i == 1) {
      slider[3].style.transform = `translateX(220%)`;
    } else {
      slider[0].style.transform = `translateX(-220%)`;
    }
    slider[i + 1].style.transform = `translateX(-110%)`;
    slider[i].style.transform = `translateX(0)`;
    slider[i].style.transform = `scale(1.1)`;
    slider[i - 1].style.transform = `translateX(110%)`;
  }
  i++;
  if (i > slider.length - 1) {
    i = 0;
  }
},5000);

function removeAllEffects() {
  slider.forEach((el) => {
    el.classList.remove('slide');
  });
  bullets.forEach((el) => {
    el.classList.remove('active');
  })
}
let form = document.querySelector('footer form');
let email = document.querySelector('footer form input');
let Msg = document.querySelector('footer form span');
form.addEventListener('submit', (e) => {
  if (email.validity.valueMissing || email.validity.typeMismatch) {
    email.classList.add('error');
    Msg.textContent = 'Please insert a valid email';
    Msg.classList.add('error');
    email.focus();
  } else {
    email.classList.remove('error');
    Msg.classList.remove('error');
    Msg.textContent = 'Thank you';
    Msg.classList.add('sucess');
    setTimeout(() => {
      Msg.textContent = '';
      Msg.classList.remove('sucess');
    }, 2000);
    email.value = ''
  }
  e.preventDefault();
});