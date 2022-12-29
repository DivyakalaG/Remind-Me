import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


username="Enter your username"
password='Enter the password'

uname='';
pswd='';

  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }


  unameChange(event:any)
  {
    console.log(event);
    this.uname=event.target.value;
    console.log(this.uname);
    
  }

  pswdChange(event:any)
  {
    this.pswd=event.target.value;
    console.log(this.pswd);
    
  }

  
  login()
  {
    // alert('Login Clicked')
    var uname=this.uname;
    var pswd=this.pswd;
    var userDetails=this.ds.userDetails;

    const result = this.ds.login(uname, pswd)
    if(result){
      alert('Login Successfull')
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert('Login Failed')
    }
    
    // if(uname in userDetails)
    // {
    //   if(pswd==userDetails[uname]['password'])
    //   {
    //     alert('Login Successfull')
    //     this.router.navigateByUrl('dashboard')
    //   }
    //   else{
    //     alert('Invalid Password')
    //   }
    // }else{
    //   alert('Invalid User Details')
    // }
  }

}
