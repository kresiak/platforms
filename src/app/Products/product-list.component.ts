import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx'
import { ProductService } from './services/products.service'
import { ConfigService } from 'gg-basic-data-services'
import { DataStore } from 'gg-basic-data-services'
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import {utilsDates as dateUtils, utilsReports as reportsUtils} from 'gg-basic-code'
import { ConfirmationService } from 'gg-ui'

@Component(
    {
        //moduleId: module.id,
        selector: 'gg-product-list',
        templateUrl: './product-list.component.html'
    }
)
export class ProductListComponent implements OnInit {
    @Input() productsObservable: Observable<any>;
    @Input() selectedProductIds: string[] = []

    @Output() productsSelected = new EventEmitter();

    public products;

    constructor(private dataStore: DataStore, private productService: ProductService) {
    }


    fnFilter = (product, txt) => {
        if (txt === '' || txt === '!' || txt === '$' || txt === '$>' || txt === '$<') return !product.annotation.disabled

        if (txt.startsWith('$S/')) {
            let txt2 = txt.slice(3);
            return product.data.isStock && (!txt2 || product.data.name.toUpperCase().includes(txt2))
        }
        if (txt.startsWith('!')) {
            let txt2 = txt.slice(1);
            return !product.data.name.toUpperCase().includes(txt2) && !(product.annotation.supplierName || '').toUpperCase().includes(txt2)
        }
        if (txt.startsWith('$>') && +txt.slice(2)) {
            let montant = +txt.slice(2);
            return + product.data.price >= montant;
        }
        if (txt.startsWith('$<') && +txt.slice(2)) {
            let montant = +txt.slice(2);
            return + product.data.price <= montant;
        }
        if (txt.startsWith('#<') && +txt.slice(2)) {
            let montant = +txt.slice(2);
            return  product.annotation.hasStockage && +product.annotation.nbInStockage <= montant;
        }
        if (txt.startsWith('#>') && +txt.slice(2)) {
            let montant = +txt.slice(2);
            return  product.annotation.hasStockage && +product.annotation.nbInStockage > montant;
        }
        if (txt.startsWith('#HS')) {
            return product.annotation.hasStockage
        }
        if (txt.startsWith('$T') && (+txt.slice(2) + 1)) {
            let montant = +txt.slice(2);
            return + product.data.tva == montant;
        }

        if (txt.startsWith('$M')) {
            return true // !product.annotation.disabled && product.annotation.multipleOccurences;
        }

        if (txt.startsWith('$DO')) {
            return product.data.documents && product.data.documents.length > 0
        }

        if (txt.startsWith('$DI')) {
            return product.annotation.disabled;
        }

        if (txt.startsWith('$PR')) {
            return product.data.isLabo;
        }
        if (txt.startsWith('$PU')) {
            return !product.data.isLabo;
        }
        if (txt.startsWith('$OR')) {
            return true //  product.annotation.productFrequence;
        }

        if (txt.startsWith('$FR')) {
            return product.data.isFrigo;
        }

        if (txt.startsWith('$V')) {
            return product.data.onCreateValidation;
        }
        if (txt.startsWith('$SE')) {
            return this.selectedProductIdsMap && this.selectedProductIdsMap.has(product.data._id);
        }

        return product.data.name.toUpperCase().includes(txt) || (product.data.description || '').toUpperCase().includes(txt) || (product.annotation.supplierName || '').toUpperCase().includes(txt) 
            || (product.data.package || '').toUpperCase().includes(txt) || product.data.catalogNr.toUpperCase().includes(txt) 
    }


  
    ngOnInit(): void {
        this.selectedProductIdsMap = new Set(this.selectedProductIds)
    }

    setProducts(products) {
        this.products = products
    }

    isProductReadOnly(product) {
        return true
    }

    public isPageRunning: boolean = true
    ngOnDestroy(): void {
        this.isPageRunning = false
    }

    getProductObservable(id: string) {
        return this.productsObservable.map(products => products.filter(product => product.data._id === id)[0]);
    }

    public selectedProductIdsMap: Set<string>

    productSelectedInList(event, product, isSelected: boolean) {
        event.preventDefault()
        event.stopPropagation()
        var id = (product.data || {})._id
        if (isSelected && this.selectedProductIdsMap.has(id)) this.selectedProductIdsMap.delete(id)
        if (!isSelected && !this.selectedProductIdsMap.has(id)) this.selectedProductIdsMap.add(id)
        this.productsSelected.next(Array.from(this.selectedProductIdsMap.values()))
    }

    isProductSelected(product) {
        return this.selectedProductIdsMap.has(product.data._id)
    }


}