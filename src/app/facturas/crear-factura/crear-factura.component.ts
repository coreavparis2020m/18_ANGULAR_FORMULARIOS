import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NumerosService } from 'src/app/servicios/numeros.service';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { Cliente } from 'src/app/modelos/cliente.model';
import { FacturasService } from 'src/app/servicios/facturas.service';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.scss']
})
export class CrearFacturaComponent implements OnInit {

    formFra: FormGroup;
    fechaActual = new Date();
    clientes: Array<Cliente> = [];
    clienteSeleccionado: Cliente;
    showNoCoincidencias = false;

    constructor(private numerosService: NumerosService,
                private clientesService: ClientesService,
                private facturasService: FacturasService) { }

    ngOnInit() {
        this.formFra = new FormGroup({
            cliente: new FormControl(''),
            cif: new FormControl(''),
            fecha: new FormControl(this.fechaActual),
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
                                                                        if(res.clientes.length === 0) {
                                                                            this.showNoCoincidencias = true;
                                                                        } else {
                                                                            this.showNoCoincidencias = false;
                                                                        }
                                                                        this.clientes = res.clientes;
                                                                    }, (error: any) => {
                                                                        console.log(error);
                                                                    })
                                            } else {
                                                this.showNoCoincidencias = false;
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

    setCliente(i) {
        this.clienteSeleccionado = this.clientes[i];
        this.formFra.get('cliente').patchValue(this.clienteSeleccionado.nombre, {emitEvent: false});
        this.formFra.get('cif').patchValue(this.clienteSeleccionado.cif, {emitEvent: false});
        this.clientes = [];
    }

    sendFactura() {
        let factura = {
            cliente: this.clienteSeleccionado,
            fecha: this.formFra.get('fecha').value,
            concepto: this.formFra.get('concepto').value,
            base: this.formFra.get('base').value,
            tipo: this.formFra.get('tipo').value
        }

        this.facturasService.postFactura(factura)
                                .subscribe((res: any) => {
                                    console.log(res);
                                }, (error: any) => {
                                    console.log(error);
                                })

    }

}
