import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  dataPost: any = [];
  show: boolean = false;
  
  constructor(public miApiRest: ApiRestService) { }

  ngOnInit(): void {
    this.verApi();
  }

  verApi(){
    return this.miApiRest.getPost().subscribe((data:{})=>{
      this.dataPost = data;
  })
  }
}
