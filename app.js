const navSlide = ()=> {
  const icon = document.querySelector('.icon');
  const nav = document.querySelector('.nav-links');


  icon.addEventListener('click', () =>{
    nav.classList.toggle('nav-active');
  });


}

navSlide();
