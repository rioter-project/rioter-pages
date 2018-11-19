import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Ontology } from '../models';
import { ONTOLOGIES } from './ontology.mock';
import { of } from 'rxjs/observable/of';

@Injectable()
export class OntologyService {
    constructor() { }

    getAllOntologies(): Observable<Ontology[]> {
        return of(ONTOLOGIES);
    }
}
