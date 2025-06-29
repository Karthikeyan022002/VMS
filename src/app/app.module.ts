import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { PageComponent } from './page/page.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user-dashborad/user.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VaccinehistoryComponent } from './vaccinehistory/vaccinehistory.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BookingComponent } from './booking/booking.component';
import { FamilyBookingComponent } from './family-booking/family-booking.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { CertificateComponent } from './certificate/certificate.component';
import { UsertableComponent } from './usertable/usertable.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminManagerComponent } from './admin-manager/admin-manager.component';
import { AddslotComponent } from './addslot/addslot.component';
import { AddvaccineComponent } from './addvaccine/addvaccine.component';
import { UsersidebarComponent } from './usersidebar/usersidebar.component';
// import { RescheduleviewComponent } from './rescheduleview/rescheduleview.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { MakingSlotsComponent } from './making-slots/making-slots.component';
import { RegisterComponentComponent } from './register-component/register-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignupComponent,
    PageComponent,
    UserComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    VaccinehistoryComponent,
    UserProfileComponent,
    BookingComponent,
    FamilyBookingComponent,
    ViewBookingComponent,
    CertificateComponent,
    UsertableComponent,
    AdmindashboardComponent,
    AdminManagerComponent,
    AddslotComponent,
    AddvaccineComponent,
    UsersidebarComponent,
    // RescheduleviewComponent,
    AdminhomeComponent,
    MakingSlotsComponent,
    RegisterComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
     MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
