
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import {
  SharedModule,
  HeaderComponent,
  FooterComponent
} from './shared';
import { RouterModule } from '@angular/router';
import { OntologyModule } from './ontology/ontology.module';
import { OntologyService } from './shared/services';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    OntologyModule,
    rootRouting
  ],
  providers: [
    OntologyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
