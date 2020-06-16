import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateCif } from 'src/app/validadores/cif.validator';
import { Cliente } from 'src/app/modelos/cliente.model';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit {

    _id: string;
    formCliente: FormGroup;
    showValidacion = false;
    provincias = ['Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz','Barcelona','Burgos','Cáceres',
                    'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
                    'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
                    'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
                    'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza'];
    cliente: Cliente;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private clientesService: ClientesService) { }

    ngOnInit() {
        this._id = this.route.snapshot.params._id;
        this.formCliente = new FormGroup({
            nombre: new FormControl('',[Validators.required]),
            cif: new FormControl(''),
            calle: new FormControl('', [Validators.required, Validators.minLength(5)]),
            localidad: new FormControl(''),
            provincia: new FormControl(''),
            email: new FormControl(''),
            pago: new FormControl(''),
        });
        this.clientesService.getClienteId(this._id)
                                .subscribe((res: any) => {
                                    this.cliente = res.cliente;
                                    this.formCliente.get('nombre').setValue(this.cliente.nombre);
                                    this.formCliente.get('cif').setValue(this.cliente.cif);
                                    this.formCliente.get('calle').setValue(this.cliente.calle);
                                    this.formCliente.get('localidad').setValue(this.cliente.localidad);
                                    this.formCliente.get('provincia').setValue(this.cliente.provincia);
                                    this.formCliente.get('email').setValue(this.cliente.email);
                                    this.formCliente.get('pago').setValue(this.cliente.pago);
                                }, (error: any) => {
                                    
                                })
    }

    sendCliente() {
        let cambiosCliente = {
            nombre: this.formCliente.get('nombre').value,
            calle: this.formCliente.get('calle').value,
            localidad: this.formCliente.get('localidad').value,
            provincia: this.formCliente.get('provincia').value,
            email: this.formCliente.get('email').value,
            pago: this.formCliente.get('pago').value,
        }
        this.clientesService.putCliente(this._id, cambiosCliente)
                                .subscribe((res: any) => {
                                    console.log(res);
                                    this.router.navigate(['/listado-clientes']);
                                },(error: any) => {
                                    console.log(error);
                                })
    }

    changeShowValidacion() {
        this.showValidacion = true;
    }

}
