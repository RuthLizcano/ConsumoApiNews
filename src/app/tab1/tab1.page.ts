import { Component, OnInit } from '@angular/core';
import { ClienteApiService } from '../service/cliente-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  newList =[];

  constructor(private miService: ClienteApiService) {}

  ngOnInit(){
    this.miService.getBisness().subscribe(response=>{
      console.log(response.articles);
      this.newList = response.articles;

    });
  }

}
