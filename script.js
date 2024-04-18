document.getElementById('mode-toggle').addEventListener('click', function() {
  // Toggle 'dark-mode' class on the body
  document.body.classList.toggle('dark-mode');

  // Toggle font color between white and black
  var elements = document.querySelectorAll('h1, h2, h3, p, ul, li, a');
  elements.forEach(function(element) {
      element.classList.toggle('light-font');
  });

  // Toggle icon between sun and moon
  var icon = document.querySelector('#mode-toggle i');
  if (document.body.classList.contains('dark-mode')) {
      // Dark mode
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
  } else {
      // Light mode
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
  }
});
