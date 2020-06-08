import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.scss']
})
export class CrearFacturaComponent implements OnInit {

    formFra: FormGroup;
    fechaActual = new Date();

    constructor() { }

    ngOnInit() {
        this.formFra = new FormGroup({
            nombreCliente: new FormControl(''),
            cif: new FormControl(''),
            fecha: new FormControl(null),
            concepto: new FormControl(''),
            base: new FormControl(null),
            tipo: new FormControl(0.21),
            importeIVA: new FormControl(null),
            total: new FormControl(null)
        });
    }

}
