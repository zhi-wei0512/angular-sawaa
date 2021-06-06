import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LotionComponent } from './component/lotion/lotion.component';
import { PageProductRoutingModule } from './page-product-routing.module'


@NgModule({
  declarations: [LotionComponent],
  imports: [
    CommonModule,
    PageProductRoutingModule
  ]
})
export class PageProductModule { }
