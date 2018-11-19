import { OntologyService } from './../shared/services/ontology.service';
import { Component, OnInit } from '@angular/core';
import { Ontology } from '../shared/models';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ontology',
    templateUrl: './ontology.component.html',
    styleUrls: ['./ontology.component.css']
})
export class OntologyComponent implements OnInit {
    ontologies: Array<Ontology> = [];

    constructor(
        public ontologyService: OntologyService,
        public router: Router
    ) { }

    ngOnInit(): void {
        this.ontologyService.getAllOntologies()
            .subscribe(ont => {
                this.ontologies = ont;
            });
    }

    linkOnt(id: number): void {
        console.log(id);
        window.location.href = this.ontologies[id-1].url;
    }
}
