import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

    urlCliente = 'http://localhost:3000/cliente';

    constructor(private http: HttpClient) { }

    postCliente(cliente) {
        return this.http.post(this.urlCliente, cliente)
                    .pipe(
                        map((res: any) => {
                            return res
                        })
                    )     
    }

    getClientes() {
        return this.http.get(this.urlCliente)
                    .pipe(
                        map((res: any) => {
                            return res
                        })
                    )
    }

    getClienteId(_id) {
        return this.http.get(this.urlCliente + '/' + _id)
                    .pipe(
                        map((res: any) => {
                            return res
                        })
                    )
    }

    searchCliente(termino) {
        return this.http.get(this.urlCliente + '/search/' + termino)
                    .pipe(
                        map((res: any) => {
                            return res
                        })
                    )
    }

    putCliente(_id, cambiosCliente) {
        return this.http.put(this.urlCliente + '/' + _id, cambiosCliente)
                    .pipe(
                        map((res: any) => {
                            return res
                        })
                    )
    }

    deleteCliente(_id) {
        return this.http.delete(this.urlCliente + '/' + _id)
                    .pipe(
                        map((res: any) => {
                            return res
                        })
                    )
    }

}
