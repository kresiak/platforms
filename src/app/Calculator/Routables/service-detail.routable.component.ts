import { Component, Input, OnInit, Output } from '@angular/core'
import { Observable, Subscription } from 'rxjs/Rx'

import  {BaseComponentRoutable} from './routable-base.component'

@Component(
    {
        templateUrl: './service-detail.routable.component.html'
    }
)
export class ServiceDetailComponentRoutable extends BaseComponentRoutable {
    service: any;

    initData(id: string) {
        if (id) {
            this.platformService.getAnnotatedServices().map(services => services.filter(s => s.data._id === id)[0]).takeWhile(() => this.isPageRunning).subscribe(res => {
                this.service= res 
            })
        }
    }

}
