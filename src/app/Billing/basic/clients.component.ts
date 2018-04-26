import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { DataStore } from 'gg-basic-data-services'
import { PlatformService } from '../../Services/platform.service'
import {utilsComparators as comparatorsUtils} from 'gg-search-handle-data'
import { FormItemStructure, FormItemType} from 'gg-ui'

@Component(
    {
        selector: 'gg-clients',
        templateUrl: './clients.component.html'
    }
)
export class PlatformClientsComponent implements OnInit {
    constructor(private dataStore: DataStore, private platformService: PlatformService) {
    }

    public clientsList: any= []
    public isPageRunning: boolean = true
    public entrepriseListObservable
    public enterpriseId: string

    fnFilter(user, txt) {
        if (txt.trim() === '') return true;
        return (user.data.name || '').toUpperCase().includes(txt.toUpperCase()) || (user.data.firstName || '').toUpperCase().includes(txt.toUpperCase()) || (user.data.labo || '').toUpperCase().includes(txt.toUpperCase()) || (user.annotation.enterprise || '').toUpperCase().includes(txt.toUpperCase())
    }

    setClients(clients) {
        this.clientsList= clients
    }

    public formStructure: FormItemStructure[]= []

    ngOnInit(): void {

        this.formStructure.push(new FormItemStructure('name', 'PLATFORM.CLIENT.LABEL.NAME', FormItemType.InputText, {isRequired: true, minimalLength: 3}))
        this.formStructure.push(new FormItemStructure('firstName', 'PLATFORM.CLIENT.LABEL.FIRST NAME', FormItemType.InputText, {isRequired: true, minimalLength: 3}))
        this.formStructure.push(new FormItemStructure('email', 'PLATFORM.CLIENT.LABEL.EMAIL', FormItemType.InputText, {isRequired: true, isEmail:true}))
        this.formStructure.push(new FormItemStructure('telephone', 'PLATFORM.CLIENT.LABEL.TELEPHONE', FormItemType.InputText, {isRequired: true}))
        this.formStructure.push(new FormItemStructure('entrepriseListObservable', 'PLATFORM.CLIENT.LABEL.ENTERPRISE OF CLIENT', FormItemType.GigaOptions, {isRequired: true, selectableData: this.entrepriseListObservable}))

        this.entrepriseListObservable = this.dataStore.getDataObservable('platform.enterprises').takeWhile(() => this.isPageRunning).map(enterprises => enterprises.map(enterprise => {
            return {
                id: enterprise._id,
                name: enterprise.name
            }
        }))

    }

    enterpriseChanged(enterpriseId) {
        this.enterpriseId = enterpriseId
    }    

    formSaved(data) {
        this.dataStore.addData('platform.clients', {
            name: data.name,
            firstName: data.firstName,
            email: data.email,
            telephone: data.telephone,
            enterpriseId: data.enterpriseId
        }).first().subscribe(res => {
            data.setSuccess('OK')
        });
    }

    ngOnDestroy(): void {
        this.isPageRunning = false
    }

    nameClientUpdated(name, clientItem) {
        clientItem.data.name = name
        this.dataStore.updateData('platform.clients', clientItem.data._id, clientItem.data)
    }

    firstNameClientUpdated(firstName, clientItem) {
        clientItem.data.firstName = firstName
        this.dataStore.updateData('platform.clients', clientItem.data._id, clientItem.data)
    }

    emailClientUpdated(email, clientItem) {
        clientItem.data.email = email
        this.dataStore.updateData('platform.clients', clientItem.data._id, clientItem.data)
    }

    telephoneClientUpdated(telephone, clientItem) {
        clientItem.data.telephone = telephone
        this.dataStore.updateData('platform.clients', clientItem.data._id, clientItem.data)
    }

    enterpriseUpdated(enterpriseId, clientItem) {
        clientItem.data.enterpriseId = enterpriseId
        this.dataStore.updateData('platform.clients', clientItem.data._id, clientItem.data)
    }

}