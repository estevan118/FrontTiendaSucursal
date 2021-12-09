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
  contenido:any;
  urlapi:string="http://localhost:8085/reporte/reportes";

  ngOnInit(): void {
    this.res=this.objetohttp.get(this.urlapi);
    this.res.subscribe((data:any[])=>{
      this.contenido=data
      console.log(this.contenido);
    });
  }

}
