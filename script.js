document.addEventListener('DOMContentLoaded', function() {
    const gridMenuIcon = document.querySelector('.grid-menu-icon');
    const squares = document.querySelectorAll('.square');
    const colors = ['#ECDFD3', '#949897', '#C3A48C', '#748486', '#A6A998', '#E5E3D7', '#B0A6B6', '#CBC4BC', '#A6A998'];
  
    function changeColor() {
      squares.forEach(function(square) {
        const randomColorIndex = Math.floor(Math.random() * colors.length);
        square.style.backgroundColor = colors[randomColorIndex];
        square.dataset.originalColor = colors[randomColorIndex];
      });
    }
  
    function hoverColor() {
      const hoverColor = '#1E1E1E';
      gridMenuIcon.addEventListener('mouseover', function() {
        squares.forEach(function(square) {
          square.dataset.originalColor = square.style.backgroundColor;
          square.style.backgroundColor = hoverColor;
        });
      });
      gridMenuIcon.addEventListener('mouseout', function() {
        squares.forEach(function(square) {
          square.style.backgroundColor = square.dataset.originalColor;
        });
      });
    }
  
    setInterval(changeColor, 1000);
    hoverColor();
  });


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('page-animation');
      }
    });
  });
  const viewbox = document.querySelectorAll('#page-animation');
  viewbox.forEach(page => {
    observer.observe(page);
  });
