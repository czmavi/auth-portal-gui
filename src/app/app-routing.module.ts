import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "auth/login",
    component: LoginComponent,
  },
  {
    path: "auth/logout",
    component: LogoutComponent,
  },
  {
    path: "account",
    component: AppLayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent,
        title: "Dashboard",
        data: { breadcrumb: "Dashboard" },
      },
      {
        path: "user-management",
        title: "User Management",
        data: { breadcrumb: "User Management" },
        loadChildren: () => import("./pages/user-management/user-management.module").then(m => m.UserManagementModule),
      },
      {
        path: "test-accounts",
        title: "Test Accounts",
        data: { breadcrumb: "Test Accounts" },
        loadChildren: () => import("./pages/test-accounts/test-accounts.module").then(m => m.TestAccountsModule),
      },
      {
        path: "api-keys",
        title: "Api Keys",
        data: { breadcrumb: "Api Keys" },
        loadChildren: () => import("./pages/api-keys/api-keys.module").then(m => m.ApiKeysModule),
      },
    ],
  },
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: "prefix"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
