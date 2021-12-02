import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private principalservice:ProductsService) { }

  resultados:any;
  file!:File;
//Solo se dejara guardar un archivo y si el archivo no es, se puede volver a cargar el nuevo en memoria y se elimina el viejo
  onChange(event:any){
    this.file=event.target.files[0];
  } 

  async onUpload(){
    this.principalservice.deleteProduct();
    this.resultados= await this.principalservice.upload(this.file);
  }

  ngOnInit(): void {
  }
}  
