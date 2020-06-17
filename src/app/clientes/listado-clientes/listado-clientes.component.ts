import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { Cliente } from 'src/app/modelos/cliente.model';
import { MensajesService } from 'src/app/servicios/mensajes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.scss']
})
export class ListadoClientesComponent implements OnInit {

    loading = true;
    clientes: Array<Cliente>;
    modal = false;
    _id: string;
  
    constructor(private clientesService: ClientesService,
                private mensajesService: MensajesService) { }

    ngOnInit() {
        this.loadClientes()
    }

    loadClientes() {
        this.clientesService.getClientes()
                                .subscribe((res: any) => {
                                    this.clientes = res.clientes;
                                    this.loading = false;
                                }, (error: any) => {
                                    console.log(error);
                                })
    }

    removeCliente(_id) {
        this.loading = true;
        this.clientesService.deleteCliente(_id)
                                .subscribe((res: any) => {
                                    this.loadClientes();
                                    this.mensajesService.setMensaje('El cliente ha sido borrado', 'success');
                                }, (error: any) => {
                                    this.mensajesService.setMensaje('Error de conexión, inténtelo de nuevo más tarde', 'warning');
                                })
    }

    showModal(_id) {
        this._id = _id;
        this.modal = !this.modal;
    }

    getAccion(event) {
        if(event.accion) {
           this.removeCliente(this._id);
           this.modal = !this.modal;
        } else {
            this._id = '';
            this.modal = !this.modal;
        }
    }

}
