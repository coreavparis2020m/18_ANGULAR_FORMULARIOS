import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    @Input() texto: string;
    @Output() accion: EventEmitter<any> = new EventEmitter;

    constructor() { }

    ngOnInit() {
    }

    setAction(accion) {
        this.accion.emit({accion: accion})
    }

}
