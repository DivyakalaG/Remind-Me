import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //current user

  currentUser='';

  constructor() { }

 //database

 userDetails:any={

  Divya:{username:'Divya', mail:'ddd', password:1000, dashboard:[]},
  Tejasswi:{username:'Tejasswi', mail:'ttt', password:1001, dashboard:[]},
  Hari:{username:'Hari', mail:'hhh', password:1002, dashboard:[]}
}
  
register(username:any, mail:any, password:any){
  let userDetails = this.userDetails
  if(username in userDetails){
    return false;
  }
  else{
    userDetails[username]={
      username:username,
      mail:mail,
      password:password,
      dashboard:[]
    }
    console.log(userDetails);

    return true;
  }
}

login(uname:any, pswd:any){
  let userDetails = this.userDetails
if(uname in userDetails){
  if(pswd==userDetails[uname]['password']){
    this.currentUser=userDetails[uname]['username']
    return true;
  }
  else{
    return false;
  }
}
else{
  return false;
}

}

add(data:any){
  //alert('ok');
  let userDetails = this.userDetails
 userDetails['dashboard'].push({
  Description:data
 })
 console.log(userDetails);
 
}

}
