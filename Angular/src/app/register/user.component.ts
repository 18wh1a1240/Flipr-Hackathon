import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : any;
  loggedUser: any;
  logger: any;
  
  constructor(private router: Router, private service: UserService) { 
    this.user = {mailId : '', password:''};
    this.logger = {};
  } 
  ngOnInit(): void {
  }
  
  async loginSubmit(loginForm:any): Promise<void> {
    await this.service.loginUser(this.user.mailId, this.user.password).then((logger) => {console.log(logger); this.loggedUser = logger} );
    if(this.loggedUser != null) {
      alert("login successfull");
      this.router.navigate(['chart']);
    }else {
      alert('Invalid credentials...');
    }
    console.log(loginForm);
  }
}
