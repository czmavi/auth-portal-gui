import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: "",
        component: UserListComponent,
        pathMatch: "full",
    },
    {
        path: ":id",
        component: UserDetailComponent,
        data: { breadcrumb: "Detail" },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserManagementRoutingModule { }