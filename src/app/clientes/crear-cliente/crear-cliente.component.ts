import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { Router } from '@angular/router';
import { ValidateCif } from 'src/app/validadores/cif.validator';
import { Cliente } from 'src/app/modelos/cliente.model';
import { MensajesService } from 'src/app/servicios/mensajes.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent implements OnInit {

    loading = false;
    formCliente: FormGroup;
    @ViewChild('nombre', {static: true}) nombreRef: ElementRef;
    showValidacion = false;
    provincias = ['Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz','Barcelona','Burgos','Cáceres',
                    'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
                    'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
                    'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
                    'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza'];

    constructor(private clientesService: ClientesService,
                private mensajesService: MensajesService,
                private router: Router) { }

    ngOnInit() {
        this.formCliente = new FormGroup({
            nombre: new FormControl('',[Validators.required]),
            cif: new FormControl('', ValidateCif),
            calle: new FormControl('', [Validators.required, Validators.minLength(5)]),
            localidad: new FormControl(''),
            provincia: new FormControl(''),
            email: new FormControl(''),
            pago: new FormControl(''),
        });
        this.nombreRef.nativeElement.focus();
    }

    sendCliente() {
        this.loading = true;
        let cliente: Cliente = {
            nombre: this.formCliente.get('nombre').value,
            cif: this.formCliente.get('cif').value,
            calle: this.formCliente.get('calle').value,
            localidad: this.formCliente.get('localidad').value,
            provincia: this.formCliente.get('provincia').value,
            email: this.formCliente.get('email').value,
            pago: this.formCliente.get('pago').value,
        }
        this.clientesService.postCliente(cliente)
                                .subscribe((res: any) => {
                                    this.mensajesService.setMensaje('El cliente fue creado con éxito', 'success');
                                    this.router.navigate(['/listado-clientes']);
                                },(error: any) => {
                                    this.loading = false;
                                    console.log(error);
                                })
    }

    changeShowValidacion() {
        this.showValidacion = true;
    }

}
