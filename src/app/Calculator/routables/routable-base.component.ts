import { Component, Input, OnInit, Output } from '@angular/core'
import { ActivatedRoute, Params, Router, NavigationExtras } from '@angular/router'
import { Observable, Subscription } from 'rxjs/Rx'
import { PlatformService } from '../../Services/platform.service'
import { DataStore } from 'gg-basic-data-services'

@Component(
    {
        template: ``
    }
)
export class BaseComponentRoutable {
    constructor(protected route: ActivatedRoute, protected platformService: PlatformService, protected dataStore: DataStore) { 
        this.route.params.first().subscribe((params: Params) => {
            let id = params['id'];
            this.initData(id)
        });
    }

    initData(id: string) {
    }

    protected isPageRunning: boolean = true

    ngOnDestroy(): void {
        this.isPageRunning= false
    }
  
}
