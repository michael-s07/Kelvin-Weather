const kelvin = 293;
//The value of kelvin will never change in the course of the program."
const celsius = kelvin - 273;
//The value of celsius is 273 deduted from kelvin, this value doesnt change"
var fahrenheit = celsius * (9/5)+32;
// The  equation value is stored in a variable called Fahrenheit, it can be change as the program runs along
fahrenheit = Math.floor(fahrenheit) ;
//The value of fahrenheit is converted into decimals
console.log("The temperature is "+fahrenheit+" degrees Fahrenheit.");
var newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log("The temperature is "+newton+" degrees Newton.");