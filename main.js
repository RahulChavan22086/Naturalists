// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Scroll to the target element
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const counters = document.querySelectorAll('.count');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;

        const speed = 150; // Change this value to adjust speed
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 30);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

// JavaScript for image zoom effect
document.querySelectorAll('.gallery-item img').forEach((img) => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.5s ease';
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// JavaScript for lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-content');
const captionText = document.querySelector('.caption');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.gallery-item img').forEach((img) => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        captionText.textContent = img.nextElementSibling.textContent;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});

