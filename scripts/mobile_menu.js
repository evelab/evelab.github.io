const menu = document.getElementById('pages');
const content = document.getElementById('content');

// for mobile version: toggle between showing and hiding page links when clicking on 'hamburger' menu div
function toggleMenu() {
  if (menu.style.maxHeight === '300px') {
    menu.style.maxHeight = '0';
    content.removeEventListener('click', closeMenu);
  } else {
    menu.style.maxHeight = '300px';
    content.addEventListener('click', closeMenu);
  }
}

// for mobile version: close menu when clicking on page content
function closeMenu() {
  menu.style.maxHeight = '0';
  content.removeEventListener('click', closeMenu);
}
