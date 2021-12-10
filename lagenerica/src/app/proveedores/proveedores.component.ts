import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  constructor(private objetohttp:HttpClient){
  }
  nitproveedor!:string;
  ciudad!:string;
  direccion!:string;
  nombre!:string;
  telefono!:string;
  respuesta!:number;

  //metodo post
  postData(){
    this.objetohttp.post<any>(
      "http://localhost:8080/api/CrearProveedores",
      {
        ciudad:this.ciudad,
        direccion:this.direccion,
        nitproveedor:this.nitproveedor,
        nombre:this.nombre,
        telefono:this.telefono
      },{observe:'response'}
    ).subscribe(response=>{
      this.respuesta=response.status;
    });
}


  
  //bloqueo de input
  public isClicked: boolean = false;

  public bloquear(): void {
    this.isClicked = true;
  }

  public desbloquear(): void {
    this.isClicked = false;
  }

  res!:any;
  urlapi:string="http://localhost:8080/api/Proveedores";
  contenido!:any;
  //metedo get
  ngOnInit(): void {
    this.res=this.objetohttp.get(this.urlapi);
    this.res.subscribe((data:any[])=>{
      this.contenido=data
    });
  }

  //mostrarporcedula
  respuesta2:number=1;
  buscarclientecedula(){
    this.res=this.objetohttp.get("http://localhost:8080/api/Proveedores?Nitproveedor="+this.nitproveedor,{observe:'response'})
    .subscribe(response=>{
      this.respuesta2=response.status;
    });
  }

  //Traerporcedula
  Getforcedula(){
    this.res=this.objetohttp.get("http://localhost:8080/api/Proveedores?Nitproveedor="+this.nitproveedor2);
    this.res.subscribe((data:any[])=>{
      this.contenido=data
    });

}

  nitproveedor2!:string;
  //Elecciondemetodoeliminar
  Eliminar(){
    if (this.nitproveedor2==null){
      this.Deletedata();
    }else{
      this.Deleteforcedula();
    }
  }

  // metodo delete
  Deletedata(){
    this.objetohttp.delete<any>(
      "http://localhost:8080/api/Proveedores",{observe:'response'}
      ).subscribe(response=>{
        this.respuesta=response.status;
      });
  }

  //eliminarporcedula
  Deleteforcedula(){
    this.objetohttp.delete<any>(
      "http://localhost:8080/api/ProveedoresEliminarNit/{Nitproveedor}?Nitproveedor=" + this.nitproveedor2 ,{observe:'response'},
      ).subscribe(response=>{
        this.respuesta=response.status;
      });
  }

  //update
  update(){
    this.desbloquear();
    this.objetohttp.put<any>(
      "http://localhost:8080/api/Proveedores/"+this.nitproveedor2,
      {
        ciudad:this.ciudad,
        direccion:this.direccion,
        nombre:this.nombre,
        telefono:this.telefono
      },{observe:'response'}
    ).subscribe(response=>{
      this.respuesta=response.status;
    });
  }
  mostrarencasillas(){
    this.bloquear();
    this.res=this.objetohttp.get("http://localhost:8080/api/Proveedores?Nitproveedor="+this.nitproveedor2);
    this.res.subscribe((data:any[])=>{
      this.contenido=data
    });
  }
  microservicio!:string;
  registrodecliente(){
    this.buscarclientecedula();
    if(this.respuesta2==204){
      this.microservicio="Clientes"
      this.postData();
      this.postData();
    }else if(this.respuesta2==200){
      this.microservicio="xxxxx"
      alert("El proveedor ya existe");
    }   
  }
}
