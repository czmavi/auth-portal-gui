import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TestAccountsListComponent } from "./test-accounts-list/test-accounts-list.component";
import { TestAccountDetailComponent } from "./test-account-detail/test-account-detail.component";
import { TestAccountCreateComponent } from "./test-account-create/test-account-create.component";

const routes: Routes = [
    {
        path: "",
        component: TestAccountsListComponent,
        pathMatch: "full",
    },
    {
        path: "new",
        component: TestAccountCreateComponent,
        data: {
            breadcrumb: "New Test Account",
        },
    },
    {
        path: ":id",
        component: TestAccountDetailComponent,
        data: {
            breadcrumb: "Detail",
        },
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class TestAccountsRoutingModule { }