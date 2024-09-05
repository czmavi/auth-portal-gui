import { NgModule } from "@angular/core";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserListComponent } from "./user-list/user-list.component";
import { TableModule } from "primeng/table";
import { UserManagementRoutingModule } from "./user-management-routing.module";
import { RouterModule } from "@angular/router";
import { InputTextModule } from "primeng/inputtext";
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from "primeng/button";

@NgModule({
    declarations: [
        UserDetailComponent,
        UserListComponent,
    ],
    imports: [
        TableModule,
        RouterModule,
        UserManagementRoutingModule,
        InputTextModule,
        FormsModule,
        InputMaskModule,
        ReactiveFormsModule,
        InputGroupModule,
        InputGroupAddonModule,
        MultiSelectModule,
        ButtonModule,
    ],
})
export class UserManagementModule {}