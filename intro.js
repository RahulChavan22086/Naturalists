document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.getElementById('enterButton');

    enterButton.addEventListener('click', () => {
        // Fade out effect
        document.querySelector('.intro-container').style.opacity = '0';
        setTimeout(() => {
            // Redirect to the main page
            window.location.href = 'Home.html'; // Adjust if your main page has a different name
        }, 500); // Delay to match fade out duration
    });
});
