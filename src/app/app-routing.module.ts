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
  {
    path: `form`, loadChildren: () =>
      import('./pages/form/form.module').then(m => m.FormModule)
  },
  {
    path: `about`, loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: `item-detail`, loadChildren: () =>
      import('./pages/item-detail/item-detail.module').then(m => m.ItemDetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
