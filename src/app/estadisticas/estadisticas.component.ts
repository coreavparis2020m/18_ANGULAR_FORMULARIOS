import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../servicios/facturas.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {

    facturas: any;

    primerDiaMesCurso: any;
    ultimoDiaMesCurso: any;
    primerDiaUltimoMes: any;
    ultimoDiaUltimoMes: any;
    primerDiaPenultimoMes: any;
    ultimoDiaPenultimoMes: any;


    constructor(private facturasService: FacturasService) { }

    ngOnInit() {
        this.loadFacturas();
        this.setFechas();
    }

    loadFacturas() {
        this.facturasService.getFacturas()
                                .subscribe((res: any) => {
                                    this.facturas = res.facturas;
                                    console.log(this.facturas);
                                }, (error: any) => {
                                    console.log(error);
                                })
    }

    setFechas() {
        let mesCurso = new Date(2020, 1, 18).getMonth();
        let ultimoMes = mesCurso - 1;
        let penultimoMes = mesCurso - 2;
        let anyoMesCurso = new Date(2020, 1, 18).getFullYear();
        let anyoUltimoMes = anyoMesCurso;
        let anyoPenultimoMes = anyoMesCurso;
        if(mesCurso === 1) {
            penultimoMes += 12;
            anyoPenultimoMes -= 1;
        } else if(mesCurso === 0) {
            ultimoMes += 12;
            penultimoMes +=12;
            anyoUltimoMes -= 1;
            anyoPenultimoMes -= 1;
        }
        //this.primerDiaMesCurso 
        //this.ultimoDiaMesCurso
        this.getDias(5, 2020);
    }

    getDias(mes, anyo) {
        let dias = [];
        let dia = new Date(anyo, mes, 1);
        while(dia.getMonth() === mes) {
            dias.push(new Date(dia));
            dia.setDate(dia.getDate() + 1);
        }
        console.log(dias);
    }

}
