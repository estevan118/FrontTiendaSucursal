import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private router: Router){}
  
  llevarcliente(){
    this.router.navigate(["/cliente"]);
  }
  llevarproveedores(){
    this.router.navigate(["/proveedores"]);
  }
  llevarproductos(){
    this.router.navigate(["/products"]);
  }
  llevarsales(){
    this.router.navigate(["/sales"]);
  }
  llevarconsolidado(){
    this.router.navigate(["/consolidado"]);
  }
  ngOnInit(): void {
  }
  llevarreportes(){
    this.router.navigate(["/reportes"]);
  }
}
