import { Injectable, Inject } from '@angular/core'
import { DataStore } from 'gg-basic-data-services'
import { SelectableData, SharedObservable } from 'gg-basic-code'
import { Observable, Subscription, ConnectableObservable } from 'rxjs/Rx'
import * as moment from "moment"
import {utilsObservables as utils} from 'gg-basic-code'

@Injectable()
export class ProductService {

    constructor(private dataStore: DataStore) {

    }

    getAnnotatedProductsAll(): Observable<any> {     // here and product list routable
        return this.getAnnotatedProducts(this.dataStore.getDataObservable('products')).map(prods =>
            prods.sort((a, b) => b.annotation.productFrequence - a.annotation.productFrequence));
    }

    getAnnotatedProductsById(id: string): Observable<any> {   // product detail routable
        return this.getAnnotatedProductsAll().map(products => products.filter(product => product.data._id === id)[0]);
    }

    getAnnotatedPrivateProducts(): Observable<any> { 
        return this.getAnnotatedProductsAll().map(products => products.filter(product => product.data.isLabo));
    }

    private getAnnotatedProducts(productsObservable: Observable<any>): Observable<any> {
        return Observable.combineLatest(productsObservable, this.dataStore.getDataObservable("suppliers"), 
            this.dataStore.getDataObservable('currencies'),
            this.dataStore.getDataObservable('products.stockage').map(entries => utils.hashMapToArrayFactoryHelper(entries, e => e.productId)),
            (products, suppliers, currencies, stockageEntriesMap) => {
                let mapSuppliers = suppliers.reduce((map, supplier) => {
                    map.set(supplier._id, supplier)
                    return map
                }, new Map());
                return products.map(product => {
                    if (!product.divisionFactor || !(+product.divisionFactor) || (+product.divisionFactor) < 0) product.divisionFactor = 1
                    let supplier = mapSuppliers.get(product.supplierId) //suppliers.filter(supplier => supplier._id === product.supplierId)[0];
                    let currency= ! product.currencyId ? 'EUR' : (currencies.filter(c => c._id === product.currencyId)[0] || {'name': '???'}).name
                    return {
                        data: product,
                        annotation: {
                            hasStockage: stockageEntriesMap.has(product._id),
                            nbInStockage: !stockageEntriesMap.has(product._id) ? 0 : stockageEntriesMap.get(product._id).filter(e => !e.dateOut).length,
                            currency: currency,
                            isPublic: !product.isLabo,
                            supplierName: supplier ? supplier.name : "unknown",
                            disabled: product.disabled || (supplier && supplier.disabled)
                        }
                    };
                });
            }
        );
    }

    
}
