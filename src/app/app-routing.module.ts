import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MarsPhotosRoversComponent } from './components/mars-photos-rovers/mars-photos-rovers.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [

  {
    path: "",
    component: NavComponent, children:[
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"roversPhotos",
        component:MarsPhotosRoversComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
