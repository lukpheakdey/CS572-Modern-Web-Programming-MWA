import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { CheckUserGuard } from './guards/check-user.gurad';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './error/not-found.component';

const routes: Routes = [
  { path: '', component: RootComponent },
  { path: 'users', loadChildren: './user/user.module#UserModule' },
  { path: 'error', component: ErrorComponent },
  { path: 'test', component: AppComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
