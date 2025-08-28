/* Task-01 */
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * (9 / 5)) + 32;
    return fahrenheit;
}

const celsius = 100;
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${fahrenheit}°F`);