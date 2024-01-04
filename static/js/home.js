// Getting the element with the ID 'started-button'
const loginButton = document.getElementById("started-button");

// Adding a click event listener to the 'Get Started' button
loginButton.addEventListener("click", function () {
    // Redirecting to the '/gemini' route when the button is clicked
    window.location.href = '/gemini';
});
