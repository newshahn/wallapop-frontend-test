import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { WlpItemCardComponent } from './components';

const routes: Routes = [
  { path: '', redirectTo: '/marketplace', pathMatch: 'full' },
  { path: 'marketplace', component: WlpItemCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
