import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home.component';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
    {
      path: '',
      component: HomeComponent
    }
  ]);

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        homeRouting,
        SharedModule
     ],
    exports: [],
    providers: [],
})
export class HomeModule {}
