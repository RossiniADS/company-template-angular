import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TeamComponent } from './pages/team/team.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { PortfolioDetailsComponent } from './pages/portfolio-details/portfolio-details.component';
import { StarterPageComponent } from './pages/starter-page/starter-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'service-detail', component: ServiceDetailsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio-detail', component: PortfolioDetailsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-detail', component: BlogDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'starter-page', component: StarterPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
