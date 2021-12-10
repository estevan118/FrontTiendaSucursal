import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fts';
  res:any;
  contenido:any;
 

  constructor(private objetohttp:HttpClient){
  }
  ngOnInit(): void {
  }
  respuesta!:number;
  nombre!:String;
  correo!: String;
  cedula!:String;
  direccion!:String;
  telefono!:String;

  //post
  postData(){
    this.objetohttp.post<any>(
      "http://localhost:8080/cliente/Clientes",
      {
        nombre_cliente: this.nombre,
        email_cliente: this.correo,
        cedula:this.cedula,
        direccion_cliente:this.direccion,
        telefono_cliente: this.telefono
      },{observe:'response'}
    ).subscribe(response=>{
      this.respuesta=response.status;
    });
  }
}
