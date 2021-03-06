import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { Observable, Subscription } from 'rxjs/Rx'
import { DataStore } from 'gg-basic-data-services'

@Component(
    {
        templateUrl: './main-component.html'
    }
)
export class BillingMainComponent implements OnInit {
    isPageRunning: boolean= true;

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.isPageRunning = false
    }

    public authorizationStatusInfo= {
        isLoggedIn: true,
        isPlatformAdminstrator: () => true
    };
}