import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
},
{
    path:'home',
    component:HomeComponent
},
{
    path:'login',
    component:LoginComponent
},
{
    path:'register',
    component:RegisterComponent
},
{
    path:'jobs',
    component:JobsComponent
},
{
    path:'**',
    component:HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
