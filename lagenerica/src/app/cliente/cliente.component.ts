import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private objetohttp:HttpClient){
  }
  contenido2!:any;
  microservicio!:String;
  escondercontenido2:any;
  cedula2!:String;
  id!:String;
  escondercontenido:any;
  respuesta!:number;
  nombre!:String;
  correo!: String;
  cedula!:String;
  direccion!:String;
  telefono!:String;
  urlapi2:String = "http://localhost:8080/cliente/Clientes?cedula=";
 //metodo post
  postData(){
      this.objetohttp.post<any>(
        "http://localhost:8080/api/clients",
        {
          identification: this.cedula,
          address: this.direccion,
          email:this.correo,
          name:this.nombre,
          phone: this.telefono
        },{observe:'response'}
      ).subscribe(response=>{
        this.respuesta=response.status;
      });
  }

  res:any;
  contenido:any;
  urlapi:string="http://localhost:8080/api/clients";

  //metedo get
  ngOnInit(): void {
    this.res=this.objetohttp.get(this.urlapi);
    this.res.subscribe((data:any[])=>{
      this.contenido=data
    });
  }

  // metodo delete
  Deletedata(){
    this.objetohttp.delete<any>(
      "http://localhost:8080/api/clients",{observe:'response'}
      ).subscribe(response=>{
        this.respuesta=response.status;
      });
  }

  //eliminarporcedula
  Deleteforcedula(){
    this.objetohttp.delete<any>(
      "http://localhost:8080/api/clients/identification/" + this.cedula2 ,{observe:'response'},
      ).subscribe(response=>{
        this.respuesta=response.status;
      });
  }
  //Elecciondemetodo
Eliminar(){
  if (this.cedula2==null){
    this.Deletedata();
  }else{
    this.Deleteforcedula();
  }
}
//bloqueo de input
public isClicked: boolean = false;

  public bloquear(): void {
    this.isClicked = true;
  }

  public desbloquear(): void {
    this.isClicked = false;
 }
  //update
  update(){
    this.desbloquear();
    this.objetohttp.put<any>(
      "http://localhost:8080/api/clients/identification/"+this.cedula2,
      {
        identification:this.cedula2,
        name: this.nombre,
        email: this.correo,
        address:this.direccion,
        phone: this.telefono
      },{observe:'response'}
    ).subscribe(response=>{
      this.respuesta=response.status;
    });
  }
  //Traerporcedula
  Getforcedula(){
      this.res=this.objetohttp.get("http://localhost:8080/api/clients/identification/" + this.cedula2);
      this.res.subscribe((data:any[])=>{
        this.contenido=data
      });
  }

  nombre3!:String;
  correo3!: String;
  cedula3:any;
  direccion3!:String;
  telefono3!:String;

  mostrarencasillas(){
    this.bloquear();
    this.res=this.objetohttp.get("http://localhost:8080/api/clients/identification/"+this.cedula2);
    this.res.subscribe((data:any[])=>{
      this.contenido=data
    });
  }
  respuesta2:number=1;
  buscarclientecedula(){
    this.res=this.objetohttp.get("http://localhost:8080/api/clients/identification/"+this.cedula,{observe:'response'})
    .subscribe(response=>{
      this.respuesta2=response.status;
    });
  }
  
  registrodecliente(){
    this.buscarclientecedula();
    if(this.respuesta2==204){
      this.microservicio="Clientes"
      this.postData();
    }else if(this.respuesta2==200){
      this.microservicio="xxxxx"
      alert("El usuario ya existe");
    }  
    this.postData();   
  }  
  
}