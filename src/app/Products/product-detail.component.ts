import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx'
import { DataStore } from 'gg-basic-data-services'
import { ConfigService } from 'gg-basic-data-services'
import { SelectableData } from 'gg-basic-code'
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as moment from "moment"
import { Router } from '@angular/router'
import {utilsComparators as comparatorsUtils} from 'gg-search-handle-data'
import {utilsDates as utilsdate} from 'gg-basic-code'
import { ConfirmationService } from 'gg-ui'
import { ProductService } from './services/products.service'

@Component(
    {
        selector: 'gg-product-detail',
        templateUrl: './product-detail.component.html'
    }
)

export class ProductDetailComponent implements OnInit {
    selectableCurrenciesObservable: Observable<any>;
    serviceSnapshot: any;
    constructor(private dataStore: DataStore, private productService: ProductService) {
    }

    @Input() productObservable: Observable<any>;

    public isPageRunning: boolean = true
    public product;

    ngOnInit(): void {
        this.productObservable.takeWhile(() => this.isPageRunning)
            .do(product => {
                this.product= product
            }).subscribe(res => { })

    }

    ngOnDestroy(): void {
        this.isPageRunning = false
    }

    nameUpdated(name: string) {

    }

}