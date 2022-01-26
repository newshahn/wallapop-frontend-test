import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { WlpItemWrapperComponent } from './components';

const routes: Routes = [
  { path: '', redirectTo: '/marketplace', pathMatch: 'full' },
  { path: 'marketplace', component: WlpItemWrapperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
