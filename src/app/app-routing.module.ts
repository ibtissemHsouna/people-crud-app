import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { RegisterComponent } from './register/register.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  { path:'login',
  component:LoginComponent,
  },
  { path:'register',
  component:RegisterComponent,
  },
  { path:'update-user/:id',
  component:UpdateUserComponent,
  },
  { path:'regiadd-user',
  component:AddUserComponent,
  },
  { path:'people-list',
  component:PeopleListComponent,
  },
  { path:'**',
  component:Page404Component ,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
