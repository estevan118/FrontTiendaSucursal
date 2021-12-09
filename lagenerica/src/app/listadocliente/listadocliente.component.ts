import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listadocliente',
  templateUrl: './listadocliente.component.html',
  styleUrls: ['./listadocliente.component.css']
})
export class ListadoclienteComponent implements OnInit {
  

  constructor(private objetohttp:HttpClient) { }
  res:any;
  contenido:any;
  urlapi:string="http://localhost:8080/cliente/Clientes";

  ngOnInit(): void {
    this.res=this.objetohttp.get(this.urlapi);
    this.res.subscribe((data:any[])=>{
      this.contenido=data
    });
  }

  

}
