import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/component/index/index.component';
import { IndexMainComponent } from './index/component/index-main/index-main.component';


const routes: Routes = [
  { path: '', component: IndexComponent,
  children: [
    { path: '', component: IndexMainComponent },
    { path: 'product', loadChildren: () => import('src/app/page-module/page-product/page-product.module').then(m => m.PageProductModule)},

    // { path: 'student', loadChildren: 'src/app/page-module/student/student.module#StudentModule' },
  ]},
  { path: '**', redirectTo: ''}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
