import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AngularFireAuthGuard,   redirectLoggedInTo,   redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { PhotosComponent } from './photos/photos.component';

const redirectUnauthorizedToLogin  = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {path:``, redirectTo:`login`,pathMatch:`full` },
  {path:`signup`, component:SignupComponent},
  {path:`login`, component:LoginComponent},
  {path:`photos`, component:PhotosComponent,canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path:`home`, component:HomeComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
