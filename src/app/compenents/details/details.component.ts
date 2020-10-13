import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { min } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pageOfItems: Array<any>;
  firstName: String;
  lastName: String;
  users: User[];
  
  itemByPage: number = 5;
  totalRecords: number;
  page: number =1;

  sizePage: number;

  constructor(private userService: UserService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getUsers();
    const id = this.route.snapshot.params["id"];
    this.userService.getUserById(+id).subscribe(
      (data) =>{this.firstName = data[0].firstName;
        this.lastName=data[0].lastName}
        );
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(data => { 
      this.users = data;
      this.totalRecords = this.users.length;

      this.sizePage = (this.totalRecords / this.itemByPage);

    });
  } 

  calculateSizePage(data){
    let valueOption = data.explicitOriginalTarget.value;
    this.itemByPage = valueOption;
    this.sizePage = (this.totalRecords / this.itemByPage);
  } 
  
    /*paginateTest(currentPage: number, itemSize: number){
      let startIndex = currentPage * this.pageSize;
      if(!(this.users.length < this.pageSize)){
          let toIndex = Math.min((startIndex + this.pageSize),this.users.length);
          this.users = this.users.slice(startIndex,toIndex);
      }
      
    }*/

}
