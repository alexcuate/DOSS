import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { LayoutRouting } from "./layout.routing";
import { AMaterialModule } from '../material/material.module';
import { NavComponent } from './nav/nav.component';
import { LayoutComponent } from "./layout.component";
import { SignInModule } from '../signin/signin.module';
import { ProfessorsModule } from '../professors/professors.module';

@NgModule ({
    declarations: [
        LayoutComponent,
        NavComponent
    ],
    exports: [
        LayoutComponent,
        NavComponent
    ],
    imports: [
        CommonModule,
        LayoutRouting,
        SignInModule,
        FormsModule,
        AMaterialModule,
        ProfessorsModule,
    ],
    providers: []
})

export class LayoutModule {  }