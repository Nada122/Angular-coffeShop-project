import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { MenueComponent } from './menue/menue.component';
import { SingleMenuComponent } from './single-menu/single-menu.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about', component:AboutUsComponent},
  {path:'contact', component:ContactUsComponent},
  {path:'menue',component:MenueComponent},
  {path:'testmonial', component:TestmonialComponent},
  {path:'menue/:id', component:SingleMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
