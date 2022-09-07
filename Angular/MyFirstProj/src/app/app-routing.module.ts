import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ModelFormComponent } from './model-form/model-form.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "login-form", component: LoginFormComponent},
  {path: "Register", component: ModelFormComponent},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
