import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { DataStore } from 'gg-basic-data-services'
import { PlatformService } from '../../Services/platform.service'
import {utilsComparators as comparatorsUtils} from 'gg-search-handle-data'
import * as moment from "moment"
import { FormItemStructure, FormItemType} from 'gg-ui'
import { SelectableData } from 'gg-basic-code'

@Component(
    {
        selector: 'gg-offers',
        templateUrl: './offers.component.html'
    }
)
export class PlatformOffersComponent implements OnInit {
    constructor ( private dataStore: DataStore, private platformService: PlatformService) {
    }

public offersList: any
public offersObservable
public isPageRunning: boolean = true
public clientsListObservable
public clientId: string
public formStructure: FormItemStructure[]= []

    ngOnInit(): void {

        this.formStructure.push(new FormItemStructure('description', 'PLATFORM.OFFER.LABEL.DESCRIPTION', FormItemType.InputText, {isRequired: true, minimalLength: 3}))
        this.formStructure.push(new FormItemStructure('clientId', 'PLATFORM.OFFER.LABEL.CHOOSE A CLIENT', FormItemType.FlexiList, {isRequired: true, selectableData: this.clientsListObservable }))

        this.offersObservable=this.platformService.getAnnotatedOffers()

        this.offersObservable.takeWhile(() => this.isPageRunning).subscribe(offers => {
            if (!comparatorsUtils.softCopy(this.offersList, offers))
                this.offersList= comparatorsUtils.clone(offers)            
        })
        
        this.clientsListObservable = this.platformService.getAnnotatedClients().takeWhile(() => this.isPageRunning).map(clients => clients.map(client => {
                return {
                    id: client.data._id,
                    name: client.annotation.fullName + ' (' + client.annotation.enterprise + ')'
                }
            }))                   
    }

    clientIdChanged(clientId) {
        this.clientId = clientId
    }

    formSaved(data) {
        var datPrefix= moment().format('YYYYMMDD') + '-GEN-'
        var offerNo= this.offersList.filter(o => o.data.prefix===datPrefix).map(o => +o.data.offerNo).sort((a,b) => b-a)[0] || 0

        var offers: any = {}
            offers.prefix = data.datPrefix,
            offers.offerNo = data.offerNo + 1,
            data.version = 0,
            offers.description = data.description,
            offers.clientId = this.clientId

        this.dataStore.addData('platform.offers', offers ).first().subscribe(res =>
            {
                data.setSuccess('OK')            
            });
        }

    ngOnDestroy(): void {
        this.isPageRunning = false
    }

}