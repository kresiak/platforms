import { Component, Input, OnInit, Output } from '@angular/core'
import { ActivatedRoute, Params, Router, NavigationExtras } from '@angular/router'
import { Observable, Subscription } from 'rxjs/Rx'
import { PlatformService } from '../services/platform.service'
import { DataStore } from 'gg-basic-data-services'

@Component(
    {
        templateUrl: './service-step-detail.routable.component.html'
    }
)
export class ServiceStepDetailComponentRoutable implements OnInit {
    serviceStep: any;
    serviceStepId: any

    step: any

    constructor(private route: ActivatedRoute, private platformService: PlatformService) { }

    ourObject: any
    state: {}

    initData(id: string) {
        if (id) {
            this.platformService.getAnnotatedServiceStep(id).takeWhile(() => this.isPageRunning).subscribe(serviceStep => {
                this.serviceStep = serviceStep
            })
        }
    }

    public isPageRunning: boolean = true

    ngOnInit(): void {
        this.route.params.first().subscribe((params: Params) => {
            this.serviceStepId = params['id'];
            this.initData(this.serviceStepId)
        });
    }

    ngOnDestroy(): void {
        this.isPageRunning = false
    }


}
