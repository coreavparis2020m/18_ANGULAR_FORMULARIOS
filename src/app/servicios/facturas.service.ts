import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

    facturas: any = [];

    constructor() { }

    postFactura(factura) {
        this.facturas.push(factura);
        console.log(this.facturas);
    }

    getFacturas() {
        return this.facturas;
    }
}
