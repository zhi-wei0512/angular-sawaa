import { LotionComponent } from './component/lotion/lotion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'Lotion', component: LotionComponent, data: { path: 'Lotion' }}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageProductRoutingModule { }
