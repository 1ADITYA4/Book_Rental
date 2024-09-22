
    // Detect when the section becomes visible on scroll
    document.addEventListener('DOMContentLoaded', function() {
        const trendingSection = document.querySelector('#trending-books');

        function handleScroll() {
            const sectionPosition = trendingSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;  // Adjust the value to control when it shows

            if (sectionPosition < screenPosition) {
                trendingSection.classList.add('visible');
            }
        }

        window.addEventListener('scroll', handleScroll);
    });
    document.getElementById('menuButton').addEventListener('click', function() {
        var dropdown = document.getElementById('menuDropdown');
        if (dropdown.style.display === 'none') {
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    });
