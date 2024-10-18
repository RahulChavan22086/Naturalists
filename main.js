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

        const speed = 100; // Change this value to adjust speed
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, speed);
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

document.addEventListener('DOMContentLoaded', () => {
    const eventLinks = document.querySelectorAll('.event-link');
    const modal = document.getElementById('event-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeButton = document.querySelector('.close-btn');

    const eventDetails = {
        1: {
            title: "Field Trip to the Botanical Garden",
            description: "Join us on a guided tour through the local botanical garden. Explore diverse plant species and learn about conservation efforts."
        },
        2: {
            title: "Guest Lecture: Advances in Genetic Engineering",
            description: "Our guest speaker will discuss the latest breakthroughs in genetic engineering, including CRISPR and gene therapy advancements."
        },
        3: {
            title: "Workshop: Microscopy Techniques",
            description: "Hands-on workshop focused on advanced microscopy techniques. Learn to use various microscopy tools and methods."
        },
        4: {
            title: "Club Social: Meet and Greet",
            description: "Get to know your fellow biology enthusiasts at our casual meet and greet event. Snacks and refreshments provided."
        }
    };

    eventLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const eventId = link.getAttribute('data-event');
            const eventData = eventDetails[eventId];

            if (eventData) {
                modalTitle.textContent = eventData.title;
                modalDescription.textContent = eventData.description;
                modal.style.display = 'flex';
            }
        });
    });

    // Close modal when the close button is clicked
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
