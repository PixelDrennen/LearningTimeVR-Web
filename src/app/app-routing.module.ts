import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './lessonplans/pages/create/create.component';
import { ClassesComponent } from './pages/classes/classes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
