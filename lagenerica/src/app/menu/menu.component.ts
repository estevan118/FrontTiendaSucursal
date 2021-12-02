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
  llevarproductos(){
    this.router.navigate(["/products"]);
  }
  ngOnInit(): void {
  }
  llevarreportes(){
    this.router.navigate(["/reportes"]);
  }
}
