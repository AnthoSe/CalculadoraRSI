import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GastosComponent } from './components/gastos/gastos.component';
import { ReactiveFormsModule } from '@angular/forms';


const rutas: Routes = [
  { path: '', component: HomeComponent },
  //{ path: 'contacto', component: ContactoComponent }
  { path: 'informacion', component :InformacionComponent},
  { path:'registro', component:FormularioComponent},
  { path: 'reporte', component: ReporteComponent}
  ];
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent, // Importa FormularioComponent solo una vez
    MenuComponent,
    HomeComponent,
    GaleriaComponent,
    ReporteComponent,
    InformacionComponent,
    GastosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(rutas),
    RouterLinkActive,
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
