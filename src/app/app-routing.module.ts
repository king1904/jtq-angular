import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ViewQueueComponent } from './view-queue/view-queue.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { AuthGuardService } from './core/authentication/auth-guard.service';

const routes: Routes = [
{ path: "formLogin", component: FormLoginComponent },
{ path: "register", component: RegisterComponent },
{ path: 'ViewQueue',
component: ViewQueueComponent,
canActivate: [AuthGuardService]},
{ path: '**', redirectTo: '/formLogin', pathMatch: 'full' }, // Redirect if url path do not match any other route.
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true },)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
