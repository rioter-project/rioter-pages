import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OntologyComponent } from './ontology.component';
import { SharedModule } from '../shared';

const ontologyRouting: ModuleWithProviders = RouterModule.forChild([
    {
      path: 'ontology',
      component: OntologyComponent
    }
  ]);

@NgModule({
    declarations: [
        OntologyComponent
    ],
    imports: [
        ontologyRouting,
        SharedModule
    ],
    exports: [],
    providers: [],
})
export class OntologyModule {}
