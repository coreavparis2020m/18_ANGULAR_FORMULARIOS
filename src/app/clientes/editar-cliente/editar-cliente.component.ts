import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit {

    _id: string;

    constructor(private route: ActivatedRoute,
                private clientesService: ClientesService) { }

    ngOnInit() {
        this._id = this.route.snapshot.params._id;
        this.clientesService.getClienteId(this._id)
                                .subscribe((res: any) => {
                                    console.log(res)
                                }, (error: any) => {

                                })
    }

}
