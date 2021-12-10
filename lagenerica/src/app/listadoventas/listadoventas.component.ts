import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-listadoventas',
  templateUrl: './listadoventas.component.html',
  styleUrls: ['./listadoventas.component.css']
})
export class ListadoventasComponent implements OnInit {
  constructor(private objetohttp:HttpClient) { }
  res:any;
  ros:any;
  contenido:any;
  contenido2:any;
  urlapi:string="http://localhost:8085/api/sales";
  urlapi2:string="http://localhost:8080/api/clients";


  ngOnInit(): void {
    this.ros=this.objetohttp.get(this.urlapi2);
    this.res=this.objetohttp.get(this.urlapi);
    this.res.subscribe((data:any[])=>{
      this.contenido=data
      console.log(this.contenido);
    });
    this.ros.subscribe((data:any[])=>{
      this.contenido2=data
      console.log(this.contenido2);
    });
  }
}
