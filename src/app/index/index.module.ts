import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './component/index/index.component';
import { IndexMainComponent } from './component/index-main/index-main.component';
import { SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [
    IndexComponent,
    IndexMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [],
})
export class IndexModule {}
