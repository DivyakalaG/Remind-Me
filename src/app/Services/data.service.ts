import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

 //database

 userDetails:any={

  Divya:{username:'Divya', mail:'ddd', password:1000},
  Tejasswi:{username:'Tejasswi', mail:'ttt', password:1001},
  Hari:{username:'Hari', mail:'hhh', password:1002}
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
    }
    console.log(userDetails);

    return true;
  }
}

login(uname:any, pswd:any){
  let userDetails = this.userDetails
if(uname in userDetails){
  if(pswd==userDetails[uname]['password']){
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

}
