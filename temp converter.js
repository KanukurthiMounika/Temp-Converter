function convertTemperature() {
    var temperatureInput = document.getElementById('temperature');
    var resultElement = document.getElementById('result');
    var unitOptions = document.getElementsByName('unit');
    var temperature = parseFloat(temperatureInput.value);

    var convertedTemperature;

    if (unitOptions[0].checked) {
        // Convert Celsius to Fahrenheit
        convertedTemperature = (temperature * 9 / 5) + 32;
        resultElement.innerHTML = temperature + ' degrees Celsius = ' + convertedTemperature + ' degrees Fahrenheit';
    } else {
        // Convert Fahrenheit to Celsius
        convertedTemperature = (temperature - 32) * 5 / 9;
        resultElement.innerHTML = temperature + ' degrees Fahrenheit = ' + convertedTemperature + ' degrees Celsius';
    }
}