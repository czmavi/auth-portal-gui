import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { CheckboxModule } from 'primeng/checkbox';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { LogoutComponent } from './pages/logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableModule } from 'primeng/table';
import { UserService } from './services/user.service';
import { UserManagementModule } from './pages/user-management/user-management.module';
import { TestAccountService } from './services/test-account.service';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ApiKeyService } from './services/api-key.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CheckboxModule,
    RippleModule,
    InputTextModule,
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    InputGroupModule,
		InputGroupAddonModule,
    UserManagementModule,
    TableModule,
    ToastModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    DialogModule,
  ],
  providers: [
    AuthService,
    UserService,
    TestAccountService,
    MessageService,
    ConfirmationService,
    ApiKeyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
