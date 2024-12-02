function convert() {
  const fahrenheit = document.getElementById('fahrenheit').value;
  const celsius = (fahrenheit - 32) * 5 / 9;
  document.getElementById('result').textContent = `Результат: ${celsius.toFixed(2)} °C`;
}

