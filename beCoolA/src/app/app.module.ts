import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SwiperModule } from 'swiper/angular';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { BecoComponent } from './beco/beco.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ServicesBComponent } from './services-b/services-b.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TeamComponent } from './team/team.component';
import { ForosComponent } from './foros/foros.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavloginComponent } from './nav/navlogin/navlogin.component';
import { RegisterComponent } from './register/register.component';
import { MembresiesComponent } from './membresies/membresies.component';
import { ForosmainComponent } from './foros/forosmain/forosmain.component';
import { ForosindiComponent } from './foros/forosmain/forosindi/forosindi.component';
import { CursosComponent } from './cursos/cursos.component';
import { StoreComponent } from './store/store.component';
import { NavloginimgComponent } from './nav/navloginimg/navloginimg.component';
import { NgxWhastappButtonModule } from 'ngx-whatsapp-button';
import { StoreindiComponent } from './store/storeindi/storeindi.component';
import { InfocursoComponent } from './cursos/infocurso/infocurso.component';
import { CursoComponent } from './cursos/curso/curso.component';
import { MetodosComponent } from './metodos/metodos.component';
import { TurismoComponent } from './turismo/turismo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    FooterComponent,
    NavComponent,
    BecoComponent,
    ServicesBComponent,
    TestimonialsComponent,
    TeamComponent,
    ForosComponent,
    ContactComponent,
    LoginComponent,
    HomeComponent,
    PagenotfoundComponent,
    NavloginComponent,
    RegisterComponent,
    MembresiesComponent,
    ForosmainComponent,
    ForosindiComponent,
    CursosComponent,
    StoreComponent,
    NavloginimgComponent,
    StoreindiComponent,
    InfocursoComponent,
    CursoComponent,
    MetodosComponent,
    TurismoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SwiperModule,
    NgxWhastappButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
