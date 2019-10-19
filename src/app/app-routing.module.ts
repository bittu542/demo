import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';


const routes: Routes = [
  {path:"home", component:AppComponent}, 
  {path:"new", component:NewCompComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const 
RoutingComponent = [AppComponent,NewCompComponent];