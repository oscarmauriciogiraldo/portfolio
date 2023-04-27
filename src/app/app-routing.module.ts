import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './pages/cv/cv.component';
import { HomeComponent } from './pages/home/home.component';
import { BabyShowerComponent } from './pages/baby-shower/baby-shower.component';

const routes: Routes = [
  {path: "Porfolio-Oscar-Giraldo", component: HomeComponent},
  {path: "Curriculum-Vitae", component: CvComponent},
  {path: "BabyShower-Card", component: BabyShowerComponent},
  {path: "", redirectTo: "/Porfolio-Oscar-Giraldo", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
