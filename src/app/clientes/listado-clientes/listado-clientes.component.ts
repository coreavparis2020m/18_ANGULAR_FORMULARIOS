import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { Cliente } from 'src/app/modelos/cliente.model';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.scss']
})
export class ListadoClientesComponent implements OnInit {

    clientes: Array<Cliente>;
    modal = false;
    _id: string;
  
    constructor(private clientesService: ClientesService) { }

    ngOnInit() {
        this.loadClientes()
    }

    loadClientes() {
        this.clientesService.getClientes()
                                .subscribe((res: any) => {
                                    this.clientes = res.clientes;
                                }, (error: any) => {
                                    console.log(error);
                                })
    }

    removeCliente(_id) {
        this.clientesService.deleteCliente(_id)
                                .subscribe((res: any) => {
                                    this.loadClientes();
                                    console.log(res);
                                }, (error: any) => {
                                    console.log(error);
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
