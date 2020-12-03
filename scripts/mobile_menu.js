// for mobile version: toggle between showing and hiding page links when clicking on 'hamburger' menu div
function toggleMenu() {
  var x = document.getElementById('pages');
  if (x.style.maxHeight === '300px') {
    x.style.maxHeight = '0';
    x.style.boxShadow = '0 0 4px 2px rgba(60, 60, 60, 0.95)';
    document.getElementById('content').removeEventListener('click', closeMenu);
  } else {
    x.style.maxHeight = '300px';
    x.style.boxShadow = '0 5px 4px -4px rgba(20, 20, 20, 0.95)';
    document.getElementById('content').addEventListener('click', closeMenu);
  }
}

// for mobile version: close menu when clicking on page content
function closeMenu() {
  var x = document.getElementById('pages');
  x.style.maxHeight = '0';
  x.style.boxShadow = '0 0 4px 2px rgba(60, 60, 60, 0.95)';
  document.getElementById('content').removeEventListener('click', closeMenu);
}
