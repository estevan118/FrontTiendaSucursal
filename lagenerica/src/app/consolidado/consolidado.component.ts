import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-consolidado',
  templateUrl: './consolidado.component.html',
  styleUrls: ['./consolidado.component.css']
})
export class ConsolidadoComponent implements OnInit {


  constructor(private objetohttp:HttpClient) { }
  res:any;
  contenido:any;
  urlapi:string="http://localhost:8080/consolidado/Consolidado";
  
  valor_total= 211334 + 4324344 + 43242344

  ngOnInit(): void {
    this.res=this.objetohttp.get(this.urlapi);
    this.res.subscribe((data:any[])=>{
      this.contenido=data
    });
  }
}