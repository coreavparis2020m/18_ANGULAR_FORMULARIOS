import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

    urlFactura = 'http://localhost:3000/factura';

    constructor(private http: HttpClient) { }

    postFactura(factura) {
        return this.http.post(this.urlFactura, factura)
                            .pipe(
                                map((res: any) => {
                                    return res
                                })
                            )  
    }

    getFacturas() {
        return this.http.get(this.urlFactura)
                            .pipe(
                                map((res: any) => {
                                    return res
                                })
                            )  
    }
}
