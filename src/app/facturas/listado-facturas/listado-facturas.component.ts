import { Component, OnInit } from '@angular/core';
import { FacturasService } from 'src/app/servicios/facturas.service';

@Component({
  selector: 'app-listado-facturas',
  templateUrl: './listado-facturas.component.html',
  styleUrls: ['./listado-facturas.component.scss']
})
export class ListadoFacturasComponent implements OnInit {

    facturas: any;

    constructor(private facturasService: FacturasService) { }

    ngOnInit() {
        this.loadFacturas();
    }

    loadFacturas() {
        this.facturasService.getFacturas()
                                .subscribe((res: any) => {
                                    this.facturas = res.facturas;
                                }, (error: any) => {
                                    console.log(error);
                                })
    }

}
