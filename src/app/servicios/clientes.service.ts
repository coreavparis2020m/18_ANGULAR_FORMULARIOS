import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

    clientes: any = [];

    constructor() { }

    postCliente(cliente) {
        this.clientes.push(cliente);
        console.log(this.clientes);
    }

    getClientes() {
        return this.clientes;
    }

}
