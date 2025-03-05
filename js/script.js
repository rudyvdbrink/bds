document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = 'home'; // Default to 'home'

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const offset = targetSection.offsetTop - document.getElementById('banner').offsetHeight;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        });
    });

    // Scroll to portfolio section when arrow is clicked
    const arrowDown = document.querySelector('.arrow-down');
    if (arrowDown) {
        arrowDown.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.getElementById('portfolio');
            const offset = targetSection.offsetTop - document.getElementById('banner').offsetHeight;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        });
    }
});

// Function to show the image in a modal
function showImage(img) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    modal.style.display = 'block';
    modalImg.src = img.src;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}

