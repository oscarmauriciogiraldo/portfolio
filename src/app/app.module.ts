import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CvComponent } from './pages/cv/cv.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionBannerComponent } from './pages/home/components/section-banner/section-banner.component';
import { BabyShowerComponent } from './pages/baby-shower/baby-shower.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvComponent,
    HeaderComponent,
    FooterComponent,
    SectionBannerComponent,
    BabyShowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
