import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReportesComponent } from './reportes/reportes.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ListadoclienteComponent } from './listadocliente/listadocliente.component';
import { ListadoventasComponent } from './listadoventas/listadoventas.component';





const  router: Routes = [
  {
    path: 'test', 
    component: ReportesComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    MenuComponent,
    ReportesComponent,
    LoginComponent,
    ProductsComponent,
    ListadoclienteComponent,
    ListadoventasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
