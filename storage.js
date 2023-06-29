function saveDataForm() {
  const inputs = document.querySelectorAll('input');
  
  const dataForm = {};
  
  inputs.forEach((input) => {
    dataForm[input.id] = input.value;
  });
  
  localStorage.setItem('dataForm', JSON.stringify(dataForm));
  }
  
function loadFormData() {
  const savedData = localStorage.getItem('dataForm');
  
  if (savedData) {
    const dataForm = JSON.parse(savedData);
  
    for (const field in dataForm) {
      if (dataForm.hasOwnProperty(field)) {
        document.getElementById(field).value = dataForm[field];
      }
    }
  }
}
  
const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
  input.addEventListener('change', saveDataForm);
});
  
window.addEventListener('load', loadFormData);
  