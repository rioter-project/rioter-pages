import { AppsComponent } from './apps.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';


const appsRouting: ModuleWithProviders = RouterModule.forChild([
    {
      path: 'app',
      component: AppsComponent
    }
  ]);

@NgModule({
    declarations: [
        AppsComponent
    ],
    imports: [
        appsRouting,
        SharedModule
    ],
    exports: [],
    providers: [],
})
export class AppsModule {}
