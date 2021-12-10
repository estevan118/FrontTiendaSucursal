import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ListadoclienteComponent } from './listadocliente/listadocliente.component';
import { ListadoventasComponent } from './listadoventas/listadoventas.component';
import { ConsolidadoComponent } from './consolidado/consolidado.component';
import { SalesComponent } from './sales/sales.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent },
  {path: 'sales', component: SalesComponent },
  {path: 'proveedores', component: ProveedoresComponent },
  {path: 'login', component: LoginComponent },
  {path: 'consolidado', component: ConsolidadoComponent },
  {path: 'listadoventas', component: ListadoventasComponent },
  {path: 'cliente', component: ClienteComponent },
  {path: 'listadocliente', component: ListadoclienteComponent },
  {path: 'reportes', component: ReportesComponent },
  {path:'', redirectTo:'/login', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
