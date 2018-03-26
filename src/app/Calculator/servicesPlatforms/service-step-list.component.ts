import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PlatformService } from '../../Services/platform.service'
import {utilsComparators as comparatorsUtils} from 'gg-search-handle-data'

@Component(
    {
        selector: 'gg-service-step-list',
        templateUrl: './service-step-list.component.html'
    }
)
export class PlatformServiceStepListComponent implements OnInit {
    openPanelId: any;
    constructor(private platformService: PlatformService) {
    }

    @Input() serviceStepListObservable
    @Input() isSnapshot: boolean = false

    public serviceStepsList: any[]

    ngOnInit(): void {
        this.serviceStepListObservable.takeWhile(() => this.isPageRunning).subscribe(serviceSteps => {
            if (!comparatorsUtils.softCopy(this.serviceStepsList, serviceSteps))
                this.serviceStepsList = comparatorsUtils.clone(serviceSteps)
        })
    }

    public isPageRunning: boolean = true

    ngOnDestroy(): void {
        this.isPageRunning= false        
    }

    public beforeAccordionChange($event) {
        if ($event.nextState) {
            this.openPanelId = $event.panelId;
        }
    };

}