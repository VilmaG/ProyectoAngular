import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-mi-proyecto',
  templateUrl: './mi-proyecto.component.html',
  styleUrls: ['./mi-proyecto.component.css']
})
export class MiProyectoComponent implements OnInit {
  dataMiProyecto: any = [];

  show: boolean = false;

  constructor(public miApiRest: ApiRestService) {
    
   }
   

  ngOnInit(): void {
    this.verProductos();
  }
  

  verProductos(){
    return this.miApiRest.getProductos().subscribe((data:{})=>{
      this.dataMiProyecto = data;
  })
  }

}
