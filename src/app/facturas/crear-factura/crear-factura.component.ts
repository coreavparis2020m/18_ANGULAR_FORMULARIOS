import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NumerosService } from 'src/app/servicios/numeros.service';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { Cliente } from 'src/app/modelos/cliente.model';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.scss']
})
export class CrearFacturaComponent implements OnInit {

    formFra: FormGroup;
    fechaActual = new Date();
    clientes: Array<Cliente> = [];

    constructor(private numerosService: NumerosService,
                private clientesService: ClientesService) { }

    ngOnInit() {
        this.formFra = new FormGroup({
            cliente: new FormControl(''),
            cif: new FormControl(''),
            fecha: new FormControl(null),
            concepto: new FormControl(''),
            base: new FormControl(null),
            tipo: new FormControl(0.21),
            importeIVA: new FormControl(null),
            total: new FormControl(null)
        });
        this.onChanges();
        this.onSearch();
    }

    onSearch() {
        this.formFra.get('cliente').valueChanges
                                        .subscribe(data => {
                                            if(data !== '') {
                                                this.clientesService.searchCliente(data)
                                                                    .subscribe((res:any) => {
                                                                        this.clientes = res.clientes;
                                                                    }, (error: any) => {
                                                                        console.log(error);
                                                                    })
                                            } else {
                                                this.clientes = [];
                                            }

                                        })
    }

    onChanges() {
        this.formFra.valueChanges
                        .subscribe(data => {
                            let importeIVA =  this.numerosService.formatNumero(data.base * data.tipo, 2, ' €');
                            let total = this.numerosService.formatNumero(data.base + data.base * data.tipo, 2, ' €');
                            this.formFra.get('importeIVA').patchValue(importeIVA, {emitEvent: false});
                            this.formFra.get('total').patchValue(total, {emitEvent: false});
                        });
    }

}
