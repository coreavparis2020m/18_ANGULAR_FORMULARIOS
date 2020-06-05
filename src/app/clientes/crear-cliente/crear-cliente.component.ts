import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent implements OnInit {

  
    formCliente: FormGroup;
    @ViewChild('nombre', {static: true}) nombreRef: ElementRef;

    constructor(private clientesService: ClientesService,
                private router: Router) { }

    ngOnInit() {
        this.formCliente = new FormGroup({
            nombre: new FormControl('',[Validators.required]),
            cif: new FormControl(''),
            domicilio: new FormControl('', [Validators.required, Validators.minLength(5)]),
            email: new FormControl(''),
            pago: new FormControl(''),
        });
        this.nombreRef.nativeElement.focus();
    }

    sendCliente() {
        this.clientesService.postCliente(this.formCliente.value);
        this.router.navigate(['/listado-clientes']);
    }

}
