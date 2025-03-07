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

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
    var nav = document.querySelector("nav");
    var topWrapperText = document.querySelector(".top-wrapper-text");

    if (nav && topWrapperText) {
        var navWidth = nav.offsetWidth;
        var fontSize = 16; // Initial font size in pixels
        var maxFontSize = 100; // Maximum font size in pixels
        var minFontSize = 10; // Minimum font size in pixels

        // Function to adjust font size
        function adjustFontSize() {
            topWrapperText.style.fontSize = fontSize + "px";
            while (topWrapperText.offsetWidth < navWidth && fontSize < maxFontSize) {
                fontSize++;
                topWrapperText.style.fontSize = fontSize + "px";
            }
            while (topWrapperText.offsetWidth > navWidth && fontSize > minFontSize) {
                fontSize--;
                topWrapperText.style.fontSize = fontSize + 10 + "px";
            }
        }

        // Initial adjustment
        adjustFontSize();

        // Adjust font size on window resize
        window.addEventListener("resize", function() {
            navWidth = nav.offsetWidth;
            adjustFontSize();
        });
    }
});