function openMenu() {
    document.querySelector('nav ul').style.right = '0';
}

function closeMenu() {
    document.querySelector('nav ul').style.right = '-200px';
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can use your Google Apps Script URL to send the form data
    const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
    
    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify({ name: name, email: email, message: message }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        alert('Message Sent Successfully!');
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        alert('Error sending message: ' + error.message);
    });
});
