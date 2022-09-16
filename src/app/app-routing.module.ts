import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from "./info/info.component";
import { AddPersonajeComponent } from './add-personaje/add-personaje.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'personajes',
    component: PersonajesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'personajes/info/:id',
    component: InfoComponent
  },
  {
    path: 'personajes/add',
    component: AddPersonajeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
