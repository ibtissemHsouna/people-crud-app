import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators} from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm : FormGroup ;
  constructor(private fb:FormBuilder,private userService:UserService,private router:Router) { 
  let formControls={
  firstname : new FormControl('',[
    Validators.required,
    Validators.minLength(2)
  ]),
  lastname:new FormControl('',[
    Validators.required,
    Validators.minLength(2) 
  ]),
  phone:new FormControl('',[
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(13),
    Validators.pattern("[0-9]+")
  ]),
}

this. addUserForm=this.fb.group(formControls)
}
get firstname(){
  return this.addUserForm.get('firstname')
}
get lastname(){
  return this.addUserForm.get('lastname')
}
get phone(){
  return this.addUserForm.get('phone')
}


  ngOnInit(): void {
  }

  addUser(){
  let data=this.addUserForm.value;
  let user=new User(data.firstname,data.lastname,"***",data.phone);
  this.userService.addUser(user).subscribe(
    res=>{
      this.router.navigate(['/people-list'])

    },
    err=>{
      console.log(err);
    }
  )
  }

}


