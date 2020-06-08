import { AbstractControl } from '@angular/forms';

const letras = ['a','b','c','d','e'];

export function ValidateCif (control: AbstractControl) {  // Parámetro control entra el control del campo
                                                          // La función debe devolver un objeto con true si no pasa la validación
                                                          // o null si pasa la validación
    let validPrLetra = false;

    letras.forEach((letra, i) => {
        if(control.value.toLowerCase().startsWith(letras[i])) {
            validPrLetra = true;
        }
    })

    if(validPrLetra === false) {
        return { validCif: true, mensaje: 'El CIF debe comenzar por A, B, C, D, o E'}
    } else if (control.value.length !== 9) {
        return { validCif: true, mensaje: 'El CIF debe tener 9 caracteres'}
    }

    return null; 

}