import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumerosService {

    constructor() { }

    formatNumero(value, decimales, divisa?) {
        let redondeo;
        const factor = Math.pow(10, decimales);
        if(value < 0) {
            redondeo = (Math.round(-value * factor) / factor) * -1;
        } else {
            redondeo = Math.round(value * factor) / factor;
        }
        let formateo = new Intl.NumberFormat('de-DE', {minimumFractionDigits: decimales}).format(redondeo);
        return divisa ? formateo + divisa : formateo;
    }

}
