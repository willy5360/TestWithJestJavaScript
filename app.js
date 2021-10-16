// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)




const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
console.log(fromEuroToDollar(15));


const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar *106.58;
    return valueInYen;
}
console.log(fromDollarToYen(85));

const fromYenToPound = function(valueInYen){
    let valueInpound = valueInYen *0.006;
    return valueInpound;
}
console.log(fromYenToPound(12135));


console.log(fromEuroToDollar(3.5));
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };