import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridsComponent } from "./grids/grids.component";
import { TypographyComponent } from "./typography/typography.component";
import { HelperClassesComponent } from "./helper-classes/helper-classes.component";
import { SyntaxHighlighterComponent } from "./syntax-highlighter/syntax-highlighter.component";
import { TextUtilitiesComponent } from "./text-utilities/text-utilities.component";

const routes: Routes = [
  {
    path: '',
    children: [     
      {
        path: 'grids',
        component: GridsComponent,
        data: {
          title: 'Grids'
        }
      },      
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography'
        }
      },      
      {
        path: 'textutilities',
        component: TextUtilitiesComponent,
        data: {
          title: 'Text Utilities'
        }
      },
      {
        path: 'syntaxhighlighter',
        component: SyntaxHighlighterComponent,
        data: {
          title: 'Syntax Highlighter'
        }
      },
      {
        path: 'helperclasses',
        component: HelperClassesComponent,
        data: {
          title: 'Helper Classes'
        }
      },
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UIKitRoutingModule { }
