import { Component, Input, OnInit, Output } from '@angular/core'
import { ActivatedRoute, Params, Router, NavigationExtras } from '@angular/router'
import { Observable, Subscription } from 'rxjs/Rx'
import { PlatformService } from '../services/platform.service'
import { DataStore } from 'gg-basic-data-services'

@Component(
    {
        templateUrl: './service-snapshot-detail.routable.component.html'
    }
)
export class ServiceSnapshotDetailComponentRoutable implements OnInit {
    snapshot: any;
    constructor(private route: ActivatedRoute, private dataStore: DataStore) { }

    ourObject: any
    state: {}    

    initData(id: string) {
        if (id) {
            this.dataStore.getDataObservable('platform.service.snapshots').map(snapshots => snapshots.filter(s => s._id===id)[0]).takeWhile(() => this.isPageRunning).subscribe(res => {
                this.snapshot= res 
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
