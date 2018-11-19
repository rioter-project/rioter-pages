import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared';

const contactRouting: ModuleWithProviders = RouterModule.forChild([
    {
      path: 'contact',
      component: ContactComponent
    }
  ]);

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        contactRouting,
        SharedModule
    ],
    exports: [],
    providers: [],
})
export class ContactModule {}
