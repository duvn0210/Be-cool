import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CursoComponent } from './cursos/curso/curso.component';
import { CursosComponent } from './cursos/cursos.component';
import { InfocursoComponent } from './cursos/infocurso/infocurso.component';
import { ForosindiComponent } from './foros/forosmain/forosindi/forosindi.component';
import { ForosmainComponent } from './foros/forosmain/forosmain.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MembresiesComponent } from './membresies/membresies.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { StoreComponent } from './store/store.component';
import { StoreindiComponent } from './store/storeindi/storeindi.component';
import { TurismoComponent } from './turismo/turismo.component';

const routes: Routes = [
 /*  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
   }, */
  {
    path:'',
    component:HomeComponent,
   },
 {
  path:'login',
  component:LoginComponent,
 },
 {
  path:'register',
  component:RegisterComponent,
 },
 {
  path:'blogs',
  component:ForosmainComponent,
 },
 {
  path:'blogs/blog',
  component:ForosindiComponent,
 },
 {
  path:'contact',
  component:ContactComponent
 },
 {
  path:'cursos',
  component:CursosComponent
 },
 {
  path:'cursos/info',
  component:InfocursoComponent
 },
 {
  path:'cursos/info/curso',
  component:CursoComponent
 },
 {
  path:'membresias',
  component:MembresiesComponent
 },
 {
  path:'tienda',
  component:StoreComponent
 },
 {
  path:'tienda/articulo',
  component: StoreindiComponent
 },
 {
  path:'turismo',
  component:TurismoComponent
 },
 {
  path:'**',
  component:PagenotfoundComponent,
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
