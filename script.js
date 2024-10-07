// Add event listener to contact form submit
document.querySelector('form').addEventListener('submit', (e) => {
       // Prevent default form submission behavior
       e.preventDefault();

       // Get form data
       const name = document.querySelector('#name').value;
       const email = document.querySelector('#email').value;
       const message = document.querySelector('#message').value;
   
       // Send data to contact.php using fetch API
       fetch('contact.php', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               name: name,
               email: email,
               message: message
           })
       })
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.error(error));
   });