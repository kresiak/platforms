import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { DataStore } from 'gg-basic-data-services'
import { PlatformService } from '../../Services/platform.service'
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { utilsComparators as comparatorsUtils } from 'gg-search-handle-data'

@Component(
    {
        selector: 'gg-service-steps-main',
        templateUrl: './service-steps-main.component.html'
    }
)
export class PlatformServiceStepsMainComponent implements OnInit {
    serviceDisabledStepsListObservable: any;

    constructor(private formBuilder: FormBuilder, private dataStore: DataStore, private platformService: PlatformService) {
    }

    @Input() serviceId: string = ''
    @Input() clientType: string = ''
    @Input() isSnapshot: boolean = false

    public serviceStepForm: FormGroup
    public serviceStepsListObservable: any
    public isPageRunning: boolean = true

    public machineListObservable

    ngOnInit(): void {
        this.serviceStepForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            description: [''],
            runtime: ['']
        })

        if (!this.isSnapshot) {
            this.serviceStepsListObservable = this.platformService.getAnnotatedServiceStepsByService(this.serviceId)
            
            this.serviceDisabledStepsListObservable= this.platformService.getAnnotatedDisabledServiceStepsByService(this.serviceId)

            this.machineListObservable = this.dataStore.getDataObservable('platform.machines').takeWhile(() => this.isPageRunning).map(machines => machines.map(machine => {
                return {
                    id: machine._id,
                    name: machine.name
                }
            }));
        }
        else {
            this.serviceStepsListObservable = this.dataStore.getDataObservable('platform.service.step.snapshots').map(snapshots => snapshots.filter(s => s.serviceId === this.serviceId))
        }


    }

    public machineId: string

    machineChanged(machineId) {
        this.machineId = machineId
    }

    save(formValue, isValid) {
        this.dataStore.addData('platform.service.steps', {
            name: formValue.name,
            description: formValue.description,
            serviceId: this.serviceId,
            machineId: this.machineId,
            runtime: formValue.runtime || 0
        }).subscribe(res => {
            this.reset()
        })
    }

    reset() {
        this.serviceStepForm.reset()
    }

    ngOnDestroy(): void {
        this.isPageRunning = false
    }

}