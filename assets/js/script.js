// accrodion
const slideDown = (el) => {
    el.style.height = 'auto';
    let h = el.offsetHeight;
    el.style.height = h + 'px';
    el.animate([
      { height: 0 },
      { height: h + 'px' }
    ], {
      duration: 300,
     });
};

const slideUp = (el) => {
  el.style.height = 0;
};

let activeIndex = null;
const accordions = document.querySelectorAll('.acc');
accordions.forEach((accordion) => {

  const accordionBtns = accordion.querySelectorAll('.accBtn');
  accordionBtns.forEach((accordionBtn, index) => {
    accordionBtn.addEventListener('click', (e) => {
      activeIndex = index;
      e.target.parentNode.classList.toggle('active');
      const content = accordionBtn.nextElementSibling;
      if(e.target.parentNode.classList.contains('active')){
        slideDown(content);
      }else{
        slideUp(content);
      }
      accordionBtns.forEach((accordionBtn, index) => {
        if (activeIndex !== index) {
          accordionBtn.parentNode.classList.remove('active');
          const openedContent = accordionBtn.nextElementSibling;
          slideUp(openedContent);
        }
      });
      let container = accordion.closest('.scroll-control');
      if(accordionBtn.parentNode.classList.contains('active') == false && container !== null ){
        container.classList.remove('active')
      }else if (container !== null){
        container.classList.add('active')
      }
    });
  });
});

// hamburger
let ham = document.querySelector('#js-hamburger');
let nav = document.querySelector('#js-nav');
let menu = document.querySelectorAll(".js-li");


ham.addEventListener('click', function () {

  ham.classList.toggle('active');
  nav.classList.toggle('active');
});

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', function () {
    ham.click();
  });
  console.log('click');
}