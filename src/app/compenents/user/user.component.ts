import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import {UserService} from '../../services/user.service';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private _router: Router, private route: ActivatedRoute) { }
  counter: number = this.userService.getUsers.length;
  title: String;
  users: User[];
  searchText: String = '';
  showForm: boolean;
  isEditForm: boolean;
  userData = {id: 0,firstName: '',lastName: ''};

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(data => this.users = data);

  }

  onSubmit2(data) {
    // réinitialiser le formulaire
    this.userData = {id: 0,firstName: '',lastName: ''};
    if(!this.userService.isExist(data.id)){
      this.counter = this.counter + 1;
      this.users.push({
        id: this.counter,
        firstName: data.firstName,
        lastName: data.lastName
      });
      
      this.showForm = false;
    } else{
      this.userService.updateUser(data);
      this.showForm = false;
    }
  }

  onSubmit(userData) {
    if(!this.userService.isExist(userData.id)){
    this.userService.createUser(userData).subscribe(
      data =>{
        alert('User created successfully.');
        this.getUsers();
      }
    );
    }else{
      this.userService.updateUser(userData).subscribe();
    }
    this.showForm = false;

  }





  deleteUser(id: number){
    /*this.userService.deleteUser(id);
    this._router.navigate(['/delete',id]) */
    //this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(id).
    subscribe(() =>{this.users = this.users.filter(u => u.id !== id)});
  }

  formAddUser() :void{
    this.showForm = true;
    this.isEditForm = false;
    // réinitialiser le formulaire
    this.userData = {id: 0,firstName: '',lastName: ''};
  }
  hideFormAddUser() :void {
    this.showForm = false;
    // réinitialiser le formulaire
    this.userData = {id: 0,firstName: '',lastName: ''};
  }
 
  /*updateUser(user){
    this.userService.updateUser(user);
  }*/
  
  updateForm(user){
    this.isEditForm=true;
    this.showForm= true;
    this.userData = user;
  }

}
