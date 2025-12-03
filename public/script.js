document.addEventListener('DOMContentLoaded', () => {

    /* ===============================
       MOBILE MENU
    ================================ */
    const menuBtn = document.querySelector('.menu');
    const menuItems = document.querySelector('.menu-itemsSm');

    menuBtn.addEventListener('click', function () {
        if (menuItems.classList.contains('hidden')) {
            menuItems.classList.remove('hidden')
            menuItems.classList.add('flex')

            setTimeout(() => {
                menuItems.classList.remove('opacity-0', '-translate-y-5')
                menuItems.classList.add('opacity-100', 'translate-y-0', 'shadow-lg', 'shadow-black')
            }, 100);
        } else {
            menuItems.classList.add('opacity-0', '-translate-y-5')
            menuItems.classList.remove('opacity-100', 'translate-y-0', 'shadow-lg', 'shadow-black')

            setTimeout(() => {
                menuItems.classList.add('hidden')
            }, 300);
        }
    });


    /* ===============================
       SCROLL ANIMATIONS
    ================================ */

    // Animate from bottom
    const animateScroll = document.querySelectorAll('.animate-scroll');
    const scrollObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-y-12");
                entry.target.classList.add("opacity-100", "translate-y-0");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    animateScroll.forEach(el => scrollObserver.observe(el));

    // Animate from left
    const animateLeft = document.querySelectorAll('.animate-left');
    const leftObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-x-12");
                entry.target.classList.add("opacity-100", "translate-x-0");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    animateLeft.forEach(el => leftObserver.observe(el));

    // Slide left
    const slideLeft = document.querySelectorAll('.slide-left');
    const slideLeftObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "-translate-x-12");
                entry.target.classList.add("opacity-100", "translate-x-0");
            }
        });
    }, { threshold: 0.2 });
    slideLeft.forEach(el => slideLeftObserver.observe(el));

    // Slide right
    const slideRight = document.querySelectorAll('.slide-right');
    const slideRightObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-x-12");
                entry.target.classList.add("opacity-100", "translate-x-0");
            }
        });
    }, { threshold: 0.2 });
    slideRight.forEach(el => slideRightObserver.observe(el));



    /* ===============================
       FORM VALIDATION
    ================================ */
    const form = document.querySelector('.form');
const btn = document.querySelector('.button');
const message = document.querySelector('.message');

if (form && btn && message) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    message.classList.remove('hidden');
  });

  function checkForm() {
    const name = document.querySelector('.name').value.trim();
    const email = document.querySelector('.email').value.trim();
    const textarea = document.querySelector('.textarea').value.trim();
    const phone = document.querySelector('.phone').value.trim();

    btn.disabled = !(name && email && textarea && phone);
  }

  form.addEventListener('input', checkForm);
} else {
  console.warn('Form, button, or message not found in DOM');
}


  /* ===============================
MONEY BUTTONS
=============================== */
const moneyBtns = document.querySelectorAll('.money-btn button');
const amountDon = document.querySelector('.amount');
const inputDon = document.querySelector('input[type="text"]');

// Update summary when clicking a money button
moneyBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    amountDon.textContent = btn.textContent;
    inputDon.value = '';
    localStorage.setItem('donationAmount', btn.textContent); // save selection
  });
});

// Update summary when typing a custom amount
inputDon.addEventListener('input', function() {
  const value = inputDon.value;
  amountDon.textContent = value ? `$${value}` : '';
  localStorage.setItem('donationAmount', value ? `$${value}` : ''); // save custom input
});


const nextPageAmount = document.querySelector('.summary-amount'); // an element on the next page
const savedAmount = localStorage.getItem('donationAmount');

if (savedAmount) {
  nextPageAmount.textContent = savedAmount;
}


 const cvv = document.getElementById("cvv");
  const toggle = document.getElementById("toggle-cvv");

  toggle.onclick = () => {
    if (cvv.type === "password") {
      cvv.type = "text";
      toggle.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      cvv.type = "password";
      toggle.classList.replace("fa-eye-slash", "fa-eye");
    }
  };


});



