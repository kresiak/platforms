import { Component, Input, OnInit, Output } from '@angular/core'
import { ActivatedRoute, Params, Router, NavigationExtras } from '@angular/router'
import { Observable, Subscription } from 'rxjs/Rx'
import { PlatformService } from '../services/platform.service'

@Component(
    {
        templateUrl: './service-detail.routable.component.html'
    }
)
export class ServiceDetailComponentRoutable implements OnInit {
    service: any;
    constructor(private route: ActivatedRoute, private platformService: PlatformService) { }

    ourObject: any
    state: {}    

    initData(id: string) {
        if (id) {
            this.platformService.getAnnotatedServices().map(services => services.filter(s => s.data._id === id)[0]).takeWhile(() => this.isPageRunning).subscribe(res => {
                this.service= res 
            })
        }
    }

    public isPageRunning: boolean = true

    ngOnInit(): void {
        this.route.params.first().subscribe((params: Params) => {
            let id = params['id'];
            this.initData(id)
        });
    }

    ngOnDestroy(): void {
        this.isPageRunning= false
    }
    

}
