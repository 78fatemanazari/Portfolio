const form = document.getElementById('form');
    const emailInput = document.getElementById('email');
    const errorText = document.getElementById('error');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      const email = emailInput.value;
      const isLowerCase = email === email.toLowerCase();

      if (isLowerCase) {
        // Validation OK, submit the form
        form.submit();
      } else {
        // Validation failed, show error message
        errorText.style.display='block';
        errorText.textContent = 'Email must be in lowercase!';
      }

    });