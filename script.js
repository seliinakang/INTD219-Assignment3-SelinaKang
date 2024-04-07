document.addEventListener('DOMContentLoaded', function() {
    const gridMenuIcon = document.querySelector('.grid-menu-icon');
    const squares = document.querySelectorAll('.square');
    const colors = ['#D7B8B3', '#949897', '#C3A48C', '#748486', '#A6A998', '#D6D3C2', '#B0A6B6', '#CBC4BC', '#A6A998'];
  
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


  function setStyles(){
    var logoStyles = document.querySelector("#logoStyles");
    var menuIcon = document.querySelector(".grid-menu-icon");
    if (logoStyles) {

    } else {
      menuIcon.append()
    }
  }
  
  document.addEventListener("mousemove", (e) => {
    const logoStyles = document.querySelector("#logoStyles");
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const quadrantWidth = screenWidth / 3;
    const quadrantHeight = screenHeight / 3;
    let x = e.clientX;
    let y = e.clientY;
    let quadrantX = Math.floor(x / quadrantWidth);
    let quadrantY = Math.floor(y / quadrantHeight);
    let squareNumber = (quadrantY * 3) + quadrantX + 1;
    logoStyles.innerHTML = `.square-${squareNumber}{background:#1E1E1E!important}`;
  });

  const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

window.addEventListener('DOMContentLoaded', (event) => {

const sections = Array.from(document.getElementsByClassName('section'));

for (let section of sections) {
observer.observe(section);
}

});

document.querySelector('.grid-menu-icon').addEventListener('click', function() {
  document.querySelector('.menu').style.display = 
  (document.querySelector('.menu').style.display == 'none') ? 'block' : 'none';
});