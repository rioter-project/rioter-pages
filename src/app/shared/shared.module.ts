import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule
    ],
    providers: [],
})
export class SharedModule {}
