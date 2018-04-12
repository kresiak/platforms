import { Component, Input, OnInit, Output } from '@angular/core'
import { Observable, Subscription } from 'rxjs/Rx'
import  {BaseComponentRoutable} from './routable-base.component'

@Component(
    {
        templateUrl: './service-step-detail.routable.component.html'
    }
)
export class ServiceStepDetailComponentRoutable extends BaseComponentRoutable  {
    serviceStep: any;
    serviceStepId: any

    initData(id: string) {
        this.serviceStepId = id
        if (id) {
            this.platformService.getAnnotatedServiceStep(id).takeWhile(() => this.isPageRunning).subscribe(serviceStep => {
                this.serviceStep = serviceStep
            })
        }
    }

}
