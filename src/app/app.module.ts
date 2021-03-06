import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { ListadoFacturasComponent } from './facturas/listado-facturas/listado-facturas.component';
import { CrearFacturaComponent } from './facturas/crear-factura/crear-factura.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { ModalComponent } from './modal/modal.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BarraNavegacionComponent,
    ListadoClientesComponent,
    CrearClienteComponent,
    ListadoFacturasComponent,
    CrearFacturaComponent,
    EditarClienteComponent,
    ModalComponent,
    SpinnerComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
