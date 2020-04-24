import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OiappDetailComponent} from './oiapp-detail/oiapp-detail.component'
import { OiappCmtComponent } from './oiapp-cmt/oiapp-cmt.component'


const routes: Routes = [
  {path: 'oiapp-detail', component: OiappDetailComponent},
  {path: 'oiapp-cmt', component: OiappCmtComponent},
  { path: '', redirectTo: '/oiapp-detail', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
