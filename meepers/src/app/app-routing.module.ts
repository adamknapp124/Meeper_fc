import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ForumsComponent } from './forums/forums.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'forums', component: ForumsComponent },
  { path: 'test-component', component: TestComponentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account', component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
