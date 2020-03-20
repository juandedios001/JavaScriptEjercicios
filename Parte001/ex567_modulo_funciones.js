// Ejercicio 567: Crear un módulo de funciones para ser utilizable en RequireJS.

define(function() {
    return {
        suma: function(a, b){
            return a + b;
        },
        resta: function(a, b){
            return a - b;
        },
        multiplicacion: function(a, b){
            return a * b;
        },
        división: function(a, b){
            if (b != 0){
                return a / b;
            } else {
                throw new RangeError('El divisor no puede ser cero.');
            }
        },
    };
});
