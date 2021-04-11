import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIKitRoutingModule } from "./ui-kit-routing.module";
import { MatchHeightModule } from "../shared/directives/match-height.directive"

import { GridsComponent } from "./grids/grids.component";
import { TypographyComponent } from "./typography/typography.component";
import { HelperClassesComponent } from "./helper-classes/helper-classes.component";
import { SyntaxHighlighterComponent } from "./syntax-highlighter/syntax-highlighter.component";
import { TextUtilitiesComponent } from "./text-utilities/text-utilities.component";

;

@NgModule({
    imports: [
        CommonModule,
        UIKitRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatchHeightModule
    ],
    declarations: [
        GridsComponent,
        TypographyComponent,
        HelperClassesComponent,
        SyntaxHighlighterComponent,
        TextUtilitiesComponent,
        
    ]
})
export class UIKitModule { }
