import { Component, OnInit } from '@angular/core';
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

    constructor(private clientesService: ClientesService,
                private router: Router) { }

    ngOnInit() {
        this.formCliente = new FormGroup({
            nombre: new FormControl('',[Validators.required]),
            cif: new FormControl(''),
            domicilio: new FormControl(''),
            email: new FormControl(''),
            pago: new FormControl(''),
        });
    }

    sendCliente() {
        this.clientesService.postCliente(this.formCliente.value);
        this.router.navigate(['/listado-clientes']);
    }

}
