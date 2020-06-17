import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
    timer: any;

    @ViewChild('menu', {static: false}) menuRef: ElementRef;
    @ViewChild('burger', {static: false}) burgerRef: ElementRef;

    constructor(private mensajesService: MensajesService) { }

    ngOnInit() {
        this.subscripMensaje = this.mensajesService.isMensajeIn
                                            .subscribe((data: any) => {
                                                window.clearTimeout(this.timer);
                                                this.showMensaje = true;
                                                this.texto = data.texto;
                                                this.tipoMensaje = data.tipoMensaje;
                                                this.timer = setTimeout(() => {
                                                    this.showMensaje = false;
                                                }, 5000);
                                            },(error: any) => {
                                                console.log(error);
                                            })
    }

    toggleMenu() {
        this.menuRef.nativeElement.classList.toggle('open');
        this.burgerRef.nativeElement.classList.toggle('open');
    }

}
