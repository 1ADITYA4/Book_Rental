// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the 'visible' class to elements in the viewport
function animateOnScroll() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

// Run the function when the page is scrolled or loaded
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
