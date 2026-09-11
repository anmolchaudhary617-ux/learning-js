let calculation = localStorage.getItem('calculation') || '';

if (calculation) {
  showCalculation(calculation);
}

function updateCalculation(value) {
  calculation += value;

  showCalculation(calculation);
  localStorage.setItem('calculation', calculation);
}

function showCalculation(calculation) {
  document.querySelector('.displayOnPage').innerHTML = calculation;
}