// Kelvin is a var that will stay constant
const kelvin = 0;

//Celcius is 273 degrees less than Kelvin
let celcius = kelvin - 273;

//To convert celcius to the Newton scale
let newton = celcius * (33/100);
//In order to round down to the nearest whole integer
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`)

//Fahrenheit is Celcius * (9/5) + 32
let fahrenheit = celcius * (9/5) + 32;

//In order to round down to the nearest whole integer.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
