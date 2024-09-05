import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApiKeysListComponent } from "./api-keys-list/api-keys-list.component";
import { ApiKeyCreateComponent } from "./api-key-create/api-key-create.component";
import { ApiKeyDetailComponent } from "./api-key-detail/api-key-detail.component";

const routes: Routes = [
    {
        path: "",
        component: ApiKeysListComponent,
        pathMatch: "full",
    },
    {
        path: "new",
        component: ApiKeyCreateComponent,
        data: {
            breadcrumb: "New Api Key",
        },
    },
    {
        path: ":id",
        component: ApiKeyDetailComponent,
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
export class ApiKeysRoutingModule { }