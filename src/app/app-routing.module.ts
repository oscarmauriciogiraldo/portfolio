import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: "Porfolio-Oscar-Giraldo", component: HomeComponent},
  {path: "Porfolio-Oscar-Giraldo", component: HomeComponent},
  {path: "", redirectTo: "/Porfolio-Oscar-Giraldo", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
