import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechPanelListingComponent } from './tech-panel-listing/tech-panel-listing.component';
import { TechPanelDetailsPageComponent } from './tech-panel-details-page/tech-panel-details-page.component'; // Import the new component

const routes: Routes = [
  { path: '', redirectTo: '/tech-panel-listing', pathMatch: 'full' },
  { path: 'tech-panel-listing', component: TechPanelListingComponent },
  { path: 'tech-panel-details-page', component: TechPanelDetailsPageComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
