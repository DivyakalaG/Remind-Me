import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


 uname='';
 mail='';
 pswd='';



  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }


  register(){
 // alert('ok');
 var username=this.uname;
 var password=this.pswd;
 var mail=this.mail;
 const result= this.ds.register(username,mail,password)

   if(result)
   {
     alert('Registration Successfull')
     this.router.navigateByUrl('')
   }
   else{
     alert('Registration Failed')
   }

  }
}
