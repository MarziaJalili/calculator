let calculation = localStorage.getItem('calculation')  || '';

displayProcess();

function updateCalculation(value) {
  calculation += value;
  displayProcess();
  localStorage.setItem('calculation', calculation);
}

// Optional: you can also create a function in order
// to reuse this code.
function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}

function displayProcess (){
  document.querySelector('.process')
    .innerHTML = calculation;
}