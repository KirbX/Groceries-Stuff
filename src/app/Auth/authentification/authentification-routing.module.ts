import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AuthentificationComponent } from './authentification.component'

const routes: Routes = [ 
    { path : "default", component : AuthentificationComponent }
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AuthentificationRoutingModule {}