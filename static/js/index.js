// Function to copy text to the clipboard
function copyText(text) {
    // Creating a temporary textarea element
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  
    // Creating a message element for indicating that the text is copied
    const message = document.createElement('div');
    message.textContent = 'Text Copied!';
    message.classList.add('copy-message');
    document.body.appendChild(message);
  
    // Removing the message after 2 seconds
    setTimeout(() => {
      document.body.removeChild(message);
    }, 2000);
  }
  
  // Adding click event listeners to user and Gemini response messages for copying text
  document.querySelectorAll('.user-message, .gemini-response').forEach(item => {
    item.addEventListener('click', event => {
      const text = event.currentTarget.innerText;
      copyText(text);
    });
  });
  
  // Function to open the sidebar
  function openSidebar() {
    document.getElementById("sidebar").style.left = "0";
    document.querySelector(".open-icon").style.display = "none";
    document.querySelector(".close-icon").style.display = "block";
  }
  
  // Function to close the sidebar
  function closeSidebar() {
    document.getElementById("sidebar").style.left = "-250px";
    document.querySelector(".open-icon").style.display = "block";
    document.querySelector(".close-icon").style.display = "none";
  }
  
  // Handling logout button click event to redirect to '/'
  const logoutButton = document.getElementById("logout");
  logoutButton.addEventListener("click", function () {
    window.location.href = '/logout';
  });
  

  function sendMessage(event) {
    event.preventDefault(); // Prevents the form from being automatically submitted

    // Get the message from the chat input
    const message = document.getElementById("chatInput").value.trim();

    if (message !== "") {
        // If the message is not empty, submit the form
        document.querySelector(".element").submit();
    }
}
