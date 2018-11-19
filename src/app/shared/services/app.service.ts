import { APP_VAR } from './app.mock';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { APP } from '../models';

@Injectable()
export class AppService {
    constructor() { }

    getAllApps(): Observable<APP[]> {
        return of(APP_VAR);
    }
}
