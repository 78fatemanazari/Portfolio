// Retrieve data from local storage
function loadDataFromStorage() {
  const data = localStorage.getItem('formData');
  if (data) {
    const formData = JSON.parse(data);
    document.getElementById('name').value = formData.name;
    document.getElementById('email').value = formData.email;
    document.getElementById('message').value = formData.message;
  }
}

// Save data to local storage
function saveDataToStorage() {
  const input1Value = document.getElementById('name').value;
  const input2Value = document.getElementById('email').value;
  const textareaValue = document.getElementById('message').value;

  const formData = {
    name: input1Value,
    email: input2Value,
    message: textareaValue
  };

  localStorage.setItem('formData', JSON.stringify(formData));
}

// Attach event listeners to input fields and textarea
document.getElementById('name').addEventListener('input', saveDataToStorage);
document.getElementById('email').addEventListener('input', saveDataToStorage);
document.getElementById('message').addEventListener('input', saveDataToStorage);

// Load data on page load
window.addEventListener('load', loadDataFromStorage);
