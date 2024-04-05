window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) { // Show the button when scrolling down 300px from the top
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling to the top
    });
});
