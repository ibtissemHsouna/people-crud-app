import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peopleList=[]

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      result=>{this.peopleList=result}
    ) 
  }

  delete(person:any){
    let index =this.peopleList.indexOf(person);
    this.peopleList.slice(index,1);
    this.userService.deleteUser(person._id).subscribe()
  }

}
