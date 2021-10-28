import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  dataPaises: any = [];
  show: boolean=false;
  constructor(public miApiRest: ApiRestService) { }

  ngOnInit(): void {
    this.verPaises();
  }

  verPaises(){
    return this.miApiRest.getPais().subscribe((data:{})=>{
      this.dataPaises = data;
  })
  }

}
