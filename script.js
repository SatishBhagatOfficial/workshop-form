// JavaScript for simple form validation
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (name && email) {
        alert('Form submitted successfully!');
        // Here, you can add code to send the form data to your server
    } else {
        alert('Please fill in all required fields.');
    }
});
    <script>
        document.getElementById('workshop-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            let formData = new FormData(this);
            let data = {};

            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Google Apps Script Web App URL
            const webAppUrl = 'https://script.google.com/macros/s/AKfycbxwnWzDteWz-gYOYBU8gpiO6Ft7Kzpv--MFHZgIRfvkWIotk8GS7c-HbEZ6LqKMnB1S6A/exec'; 

            fetch(webAppUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(result => {
                alert("Form submitted successfully!");
            })
            .catch(error => {
                alert("There was an error submitting the form.");
            });
        });
    </script>