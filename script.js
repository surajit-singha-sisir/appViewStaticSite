// Toggle subbpy_menu on button click and change ▼ to ▲
const bpy_menuButtons = document.querySelectorAll('.bpy_menu-btn');
bpy_menuButtons.forEach(button => {
  button.addEventListener('click', () => {
    const subbpy_menu = button.nextElementSibling;
    subbpy_menu.classList.toggle('active');
    const arrow = button.querySelector('.arrowsMark'); // Use the class selector
    arrow.textContent = subbpy_menu.classList.contains('active') ? '▲' : '▼';
  });
});

//Right Bar Block Swiper Toggle
var swiper = new Swiper('.bpy_slider-container', {
    loop: true,
    autoplay: {
      delay: 2000, // Slide after 2 seconds
    },
  });