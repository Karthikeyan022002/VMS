import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { PageComponent } from './page/page.component';
import { UserComponent } from './user-dashborad/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VaccinehistoryComponent } from './vaccinehistory/vaccinehistory.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BookingComponent } from './booking/booking.component';
import { FamilyBookingComponent } from './family-booking/family-booking.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { CertificateComponent } from './certificate/certificate.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

import { MakingSlotsComponent } from './making-slots/making-slots.component';


const routes: Routes = [
  { path: '', component: PageComponent },
  { path: 'login', component: LoginComponent },
  {path :'signup' , component: SignupComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: SignupComponent },
  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'vaccinehistory', component: VaccinehistoryComponent },
  { path: 'booking', component: BookingComponent },
      { path: 'family-booking', component: FamilyBookingComponent },
      
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'view-booking', component: ViewBookingComponent },
      {path: 'user-dashboard', component: UserComponent },

  
  
  {path:'certificate',component:CertificateComponent},
  {path:'admin-dashboard',component: AdmindashboardComponent},
  
 
  { path:'making-slots',component: MakingSlotsComponent},









  // Wildcard route for unknown paths
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


  
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
