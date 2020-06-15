import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { ListadoFacturasComponent } from './facturas/listado-facturas/listado-facturas.component';
import { CrearFacturaComponent } from './facturas/crear-factura/crear-factura.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';


const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'listado-clientes', component: ListadoClientesComponent},
    {path: 'crear-cliente', component: CrearClienteComponent},
    {path: 'editar-cliente/:_id', component: EditarClienteComponent},
    {path: 'listado-facturas', component: ListadoFacturasComponent},
    {path: 'crear-factura', component: CrearFacturaComponent},
    {path: '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
