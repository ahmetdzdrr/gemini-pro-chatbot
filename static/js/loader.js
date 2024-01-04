// Executes when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Set a timeout to redirect to '/home' after 3 seconds
    setTimeout(function() {
        window.location.href = '/home';
    }, 3000);
});
