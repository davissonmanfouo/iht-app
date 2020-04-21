import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { SettingsComponent } from './settings/settings.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
const appRoutes: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'home', canActivate:[AuthGuardService], component: HomeComponent },
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: '**', redirectTo: 'Home' },
  {path: 'settings', canActivate:[AuthGuardService], component : SettingsComponent },
  {path: 'chat', canActivate:[AuthGuardService], component : ChatComponent },
  {path: 'calendar', canActivate:[AuthGuardService], component : CalendarComponent },


]
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    HomeComponent,
    NavComponent,
    SettingsComponent,
    CalendarComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    AuthService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
