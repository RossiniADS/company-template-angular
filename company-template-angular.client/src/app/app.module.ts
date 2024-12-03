import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './pages/portfolio-details/portfolio-details.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { TeamComponent } from './pages/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    BlogDetailComponent,
    ContactComponent,
    PortfolioComponent,
    PortfolioDetailsComponent,
    ServicesComponent,
    ServiceDetailsComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
