const sum = (a,b) => {
    return a + b
   
    
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yenes japoneses
    let valueInYen = (valueInDollar / oneEuroIs.USD) * oneEuroIs.JPY;
    // Retornamos el valor en yenes
    return valueInYen;
}

// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a libras esterlinas
    let valueInPound = (valueInYen / oneEuroIs.JPY) * oneEuroIs.GBP;
    // Retornamos el valor en libras
    return valueInPound;
}

// Exportamos las funciones
module.exports = { sum,fromEuroToDollar,fromDollarToYen, fromYenToPound };