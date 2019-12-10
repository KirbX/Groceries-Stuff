import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module"; 
import { AuthentificationComponent } from './authentification.component'
import { AuthentificationRoutingModule } from './authentification-routing.module'

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AuthentificationRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AuthentificationComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthentificationModule{
    
}