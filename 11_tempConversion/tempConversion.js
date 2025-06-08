const convertToCelsius = function(temp) {
  let celsiusTemp = (temp - 32) * 5 / 9;
  celsiusTemp = celsiusTemp.toFixed(1);
  return Number(celsiusTemp);
};

const convertToFahrenheit = function(temp) {
  let fahrenheitTemp = temp * 9 / 5 + 32;
  fahrenheitTemp = fahrenheitTemp.toFixed(1);
  return Number(fahrenheitTemp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
