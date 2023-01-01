import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //currentUser - to display the name 
  user='';
  list:any[]=[];
 

  constructor(private router:Router, private ds:DataService) { 
    this.user= this.ds.currentUser;
  }

  ngOnInit(): void {
  }

  delete(id:Number)
  {
   console.log(id);
   this.list = this.list.filter(data=>data.id!==id)
  }


  add(item:string)
  {
  //alert('ok')
  this.list.push({
    id: this.list.length,
    name: item
  })
  console.log(this.list);
  
  }
}
