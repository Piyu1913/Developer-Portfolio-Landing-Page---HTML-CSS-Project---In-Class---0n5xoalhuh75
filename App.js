// Smooth scrolling to sections when clicking on CTA button
document.querySelector('.cta-btn').addEventListener('click', function(e) {
  e.preventDefault();
  
  // Scroll to the projects section smoothly
  const target = document.querySelector('#projects');
  target.scrollIntoView({
    behavior: 'smooth'
  });
});

// Optionally, you can also add smooth scrolling for any other links on the page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Optional: Form submission logic (if you have a contact form or other form)
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  // Here you can do something with the form data, like sending it to an API or showing a success message
  console.log(`Form submitted with Name: ${name}, Email: ${email}, Message: ${message}`);
  
  // Optionally show a success message or reset form
  alert('Your message has been sent successfully!');
  this.reset();  // Reset form fields
});
