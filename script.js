const convertBtn = document.getElementById("convertBtn");
const inputTemp = document.getElementById("inputTemp");
const fromUnit = document.getElementById("fromUnit");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  const temp = parseFloat(inputTemp.value);
  const selectedUnit = fromUnit.value;

  if (selectedUnit === "celsius") {
    const convertedTemp = (temp * 9) / 5 + 32;
    result.textContent = `${temp} °C is ${convertedTemp.toFixed(2)} °F`;
  } else if (selectedUnit === "fahrenheit") {
    const convertedTemp = ((temp - 32) * 5) / 9;
    result.textContent = `${temp} °F is ${convertedTemp.toFixed(2)} °C`;
    result.style.color = convertedTemp > 0 ? "#f44336" : "#4caf50";
  }
});
