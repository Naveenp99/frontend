import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { NotesComponent } from './components/notes/notes.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { EditlabelsComponent } from './components/editlabels/editlabels.component';


const routes: Routes = [
  {path:'register', component:RegistrationComponent},
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'forgetpassword', component:ForgetpasswordComponent},
  {path:'resetpassword/:token', component:ResetpasswordComponent},
  {path:'dashboard', component:DashboardComponent,
   children:[
  {path:'notes', component:NotesComponent},
  {path:'', component:NotesComponent},
  {path:'archive', component:ArchiveComponent},
  {path:'trash', component:TrashComponent},
  {path:'reminders', component:RemindersComponent},
  {path:'editlabels', component:EditlabelsComponent},
   ]},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
