import {Component) from '@angular/core';
import {UserService} from './user.service';

@Component({
  moduleId:module.id,
  selector: 'plunker-app',
  templateUrl:'./app.component.html'

  })
export class AppComponent{
  usersList:any = [];
  constructor(private userService: UserService){

userService.getUsers() 
           .subscribe(
             users =>this.userList=users,
             error => console.log(error)
             );
}
}