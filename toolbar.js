const toggleButton = document.querySelector('.toggleButton');
const menu = document.querySelector('.toolbar_menu');
const link = document.querySelector('.toolbar_link');

toggleButton.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    link.classList.toggle('active')

})