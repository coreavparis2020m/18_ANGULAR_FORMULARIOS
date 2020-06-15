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
  
    constructor(private clientesService: ClientesService) { }

    ngOnInit() {
        this.clientesService.getClientes()
                                .subscribe((res: any) => {
                                    this.clientes = res.clientes;
                                }, (error: any) => {
                                    console.log(error);
                                })
    }

}
