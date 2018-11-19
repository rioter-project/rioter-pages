import { AppService } from './../shared/services/app.service';
import { Component, OnInit } from '@angular/core';
import { APP } from '../shared/models';

@Component({
    selector: 'app-apps',
    templateUrl: './apps.component.html',
    styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

    tools: Array<APP> = [];

    constructor(
        public appService: AppService
    ) { }

    ngOnInit(): void {
        this.appService.getAllApps()
            .subscribe(tool => this.tools = tool);
    }

    linkTool(id: number): void {
        console.log(id);
        window.location.href = this.tools[id - 1].url;
    }
}
