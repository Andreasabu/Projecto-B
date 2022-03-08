import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` },
  {
    path: `list`, loadChildren: () =>
      import('./pages/list/list.module').then(m => m.ListModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
