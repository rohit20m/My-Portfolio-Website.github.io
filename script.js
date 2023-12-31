var typed = new Typed('#element', { strings: ['<<i> Web Developer</i>/>'], typeSpeed: 60, loop: true });

// Function to handle smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust the offset as needed
                behavior: 'smooth',
            });
        }
    });
});