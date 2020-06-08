import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { Router } from '@angular/router';
import { ValidateCif } from 'src/app/validadores/cif.validator';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent implements OnInit {

  
    formCliente: FormGroup;
    @ViewChild('nombre', {static: true}) nombreRef: ElementRef;
    showValidacion = false;

    userId = '05687575';

    constructor(private clientesService: ClientesService,
                private router: Router) { }

    ngOnInit() {
        this.formCliente = new FormGroup({
            nombre: new FormControl('',[Validators.required]),
            cif: new FormControl('', ValidateCif),
            domicilio: new FormControl('', [Validators.required, Validators.minLength(5)]),
            email: new FormControl(''),
            pago: new FormControl(''),
        });
        this.nombreRef.nativeElement.focus();
    }

    sendCliente() {
        let cliente = {
            nombre: this.formCliente.get('nombre').value,
            cif: this.formCliente.get('cif').value,
            domicilio: this.formCliente.get('domicilio').value,
            email: this.formCliente.get('email').value,
            pago: this.formCliente.get('pago').value,
            userId: this.userId,
            creadoEl: new Date()
        }
        this.clientesService.postCliente(cliente);
        this.router.navigate(['/listado-clientes']);
    }

    changeShowValidacion() {
        this.showValidacion = true;
    }

}
