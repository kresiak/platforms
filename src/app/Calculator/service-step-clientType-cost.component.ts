import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component(
    {
        selector: 'gg-service-step-client-type-cost',
        templateUrl: './service-step-clientType-cost.component.html'
    }
)
export class PlatformServiceStepClientTypeCostComponent implements OnInit {
    constructor() {
    }

    @Input() clientType
    @Input() serviceStep
  
    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        
    }


}