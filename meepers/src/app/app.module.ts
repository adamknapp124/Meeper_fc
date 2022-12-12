import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ForumsComponent } from './forums/forums.component';
import { AuthComponent } from './auth/auth.component';
import { AccountComponent } from './account/account.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    TopNavbarComponent,
    BottomNavbarComponent,
    TestComponentComponent,
    RegisterComponent,
    LoginComponent,
    CalendarComponent,
    CalendarComponent,
    ForumsComponent,
    AuthComponent,
    AccountComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
