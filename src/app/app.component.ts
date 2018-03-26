import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DataStore, WebSocketService, ConfigService } from 'gg-basic-data-services'
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';

@Component({
    selector: 'giga-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(private webSocketService: WebSocketService, public translate: TranslateService, private configService: ConfigService, private dataStore: DataStore ) {
        
        this.configService.setProduction(environment.production)
        this.webSocketService.init()
       
        setTimeout(() => {
            this.webSocketService.requeryDb()
        }, 3 * 60 * 60 * 1000)
     }

    ngOnInit(): void {
        this.dataStore.setLaboName('gen_platf')
    }

    public menuObservable = Observable.from([[
        {
            route: '/home',
            title: 'Home',
            titleKey: 'MENU.HOME',
            active: false
        },
        {
            route: '/dashboard',
            title: 'Dashboard',
            titleKey: 'MENU.DASHBOARD',
            active: false
        },
        {
            route: '/equipment',
            title: 'Equipment',
            titleKey: 'MENU.EQUIPMENT',
            active: false
        },
        {
            route: '/samples',
            title: 'Samples',
            titleKey: 'MENU.SAMPLES',
            active: false
        },
        {
            route: '/stock',
            title: 'Stock',
            titleKey: 'MENU.STOCK',
            active: false
        },
        {
            route: '/calculator',
            title: 'Calculator',
            titleKey: 'MENU.CALCULATOR',
            active: false
        },
        {
            route: '/billing',
            title: 'Billing',
            titleKey: 'MENU.BILLING',
            active: false
        }
        ]]);
}

