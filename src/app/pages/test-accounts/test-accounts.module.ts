import { NgModule } from "@angular/core";
import { TestAccountsRoutingModule } from "./test-accounts-routing.module";
import { RouterModule } from "@angular/router";
import { TableModule } from "primeng/table";
import { TestAccountsListComponent } from "./test-accounts-list/test-accounts-list.component";
import { TestAccountDetailComponent } from "./test-account-detail/test-account-detail.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TestAccountCreateComponent } from "./test-account-create/test-account-create.component";
import { ToolbarModule } from "primeng/toolbar";

@NgModule({
    imports: [
        TestAccountsRoutingModule,
        RouterModule,
        TableModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        ButtonModule,
        ToolbarModule,
    ],
    declarations: [
        TestAccountsListComponent,
        TestAccountDetailComponent,
        TestAccountCreateComponent,
    ],
})
export class TestAccountsModule { }