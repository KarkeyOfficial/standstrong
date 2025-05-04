// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Hover effect on cards for visual interactivity
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.transition = 'transform 0.3s ease-in-out';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });
  
  // Back to top button for smooth navigation
  const topButton = document.createElement('button');
  topButton.innerText = '↑';
  topButton.classList.add('top-btn');
  document.body.appendChild(topButton);
  
  // Show button when scrolled down
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      topButton.style.display = 'block';
    } else {
      topButton.style.display = 'none';
    }
  });
  
  // Scroll to top when clicked
  topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Modal functionality
  const modal = document.querySelector('.modal');
  const openModalBtn = document.querySelector('#open-modal');
  const closeModalBtn = document.querySelector('#close-modal');
  
  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
  
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  // Load more content dynamically
  const loadMoreBtn = document.querySelector('#load-more');
  loadMoreBtn.addEventListener('click', () => {
    const newContent = document.createElement('div');
    newContent.classList.add('new-content');
    newContent.innerHTML = '<p>More information about bullying prevention...</p>';
    document.querySelector('.resources').appendChild(newContent);
  });
  