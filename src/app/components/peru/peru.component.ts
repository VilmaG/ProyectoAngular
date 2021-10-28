import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-peru',
  templateUrl: './peru.component.html',
  styleUrls: ['./peru.component.css']
})
export class PeruComponent implements OnInit {

  dataPeru: any = [];
  show: boolean = false;

  constructor(public miApiRest: ApiRestService) { }

  ngOnInit(): void {
    this.verPeru();
  }

  verPeru(){
    return this.miApiRest.getPeru().subscribe((data:{})=>{
      this.dataPeru = data;
  })
  }
}
