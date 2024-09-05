import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TableModule } from "primeng/table";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { ToolbarModule } from "primeng/toolbar";
import { ApiKeysRoutingModule } from "./api-keys-routing.module";
import { ApiKeyCreateComponent } from "./api-key-create/api-key-create.component";
import { ApiKeyDetailComponent } from "./api-key-detail/api-key-detail.component";
import { ApiKeysListComponent } from "./api-keys-list/api-keys-list.component";

@NgModule({
    imports: [
        ApiKeysRoutingModule,
        RouterModule,
        TableModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        ButtonModule,
        ToolbarModule,
    ],
    declarations: [
        ApiKeyCreateComponent,
        ApiKeyDetailComponent,
        ApiKeysListComponent,
    ],
})
export class ApiKeysModule { }