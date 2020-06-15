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

    }

    getClientes() {
        return this.http.get(this.urlCliente)
                    .pipe(
                        map((res: any) => {
                            return res
                        })
                    )
    }

}
