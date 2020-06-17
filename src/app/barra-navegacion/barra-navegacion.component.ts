import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../servicios/mensajes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.scss']
})
export class BarraNavegacionComponent implements OnInit {

    subscripMensaje: Subscription;
    texto: string;
    tipoMensaje: string;
    showMensaje = false;

    constructor(private mensajesService: MensajesService) { }

    ngOnInit() {
        this.subscripMensaje = this.mensajesService.isMensajeIn
                                            .subscribe((data: any) => {
                                                this.showMensaje = true;
                                                this.texto = data.texto;
                                                this.tipoMensaje = data.tipoMensaje;
                                                setTimeout(() => {
                                                    this.showMensaje = false;
                                                }, 5000)
                                            },(error: any) => {
                                                console.log(error);
                                            })
    }

}
