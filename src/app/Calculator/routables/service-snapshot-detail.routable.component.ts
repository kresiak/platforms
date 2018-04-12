import { Component, Input, OnInit, Output } from '@angular/core'
import { Observable, Subscription } from 'rxjs/Rx'
import  {BaseComponentRoutable} from './routable-base.component'

@Component(
    {
        templateUrl: './service-snapshot-detail.routable.component.html'
    }
)
export class ServiceSnapshotDetailComponentRoutable extends BaseComponentRoutable {
    snapshot: any;

    initData(id: string) {
        if (id) {
            this.dataStore.getDataObservable('platform.service.snapshots').map(snapshots => snapshots.filter(s => s._id===id)[0]).takeWhile(() => this.isPageRunning).subscribe(res => {
                this.snapshot= res 
            })
        }
    }
}
