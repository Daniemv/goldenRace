import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureGuard } from './core/guards/secure.guard';

const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () =>
      import('./modules/lazy/lazy.module').then((m) => m.LazyModule)
  },
  {
    path: 'secure',
    loadChildren: () =>
      import('./modules/secure/secure.module').then((m) => m.SecureModule),
    canLoad: [SecureGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
