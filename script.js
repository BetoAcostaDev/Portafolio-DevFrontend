document.addEventListener('click', function(e) {
  const dropdown = document.querySelector('.dropdown-content');
  if (!dropdown.contains(e.target) && e.target !== dropdown) {
    dropdown.style.display = 'none';
  }
});