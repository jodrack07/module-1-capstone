export default function addHeaderBackground() {
  const hambuger = document.querySelector('.hambuger');
  const faBars = document.querySelector('.fa-bars');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      hambuger.classList.add('header-bg');
    } else {
      hambuger.classList.remove('header-bg');
      faBars.style.color = '';
    }
  });
}
