document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar nav a');
  const navbar = document.querySelector('.navbar'); // Select the navbar element

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(otherLink => otherLink.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Add scroll event listener to the window
  window.addEventListener('scroll', () => {
    // Check how far the user has scrolled
    if (window.scrollY > 50) { // You can adjust the scroll distance (50px) as needed
      navbar.style.backdropFilter = 'blur(10px)'; // Apply the blur effect
      navbar.style.backgroundColor = 'rgba(255, 235, 59, 0.7)';  //Add a semi-transparent background so the blur is visible
    } else {
      navbar.style.backdropFilter = 'none'; // Remove the blur effect
      navbar.style.backgroundColor = '#ffeb3b'; // Restore original background color
    }
  });
link.addEventListener('click', function() {
      navLinks.forEach(otherLink => otherLink.classList.remove('active'));
      this.classList.add('active');
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.backdropFilter = 'blur(10px)';
      navbar.style.backgroundColor = 'rgba(255, 235, 59, 0.7)';
    } else {
      navbar.style.backdropFilter = 'none';
      navbar.style.backgroundColor = '#ffeb3b';
    }
  });
