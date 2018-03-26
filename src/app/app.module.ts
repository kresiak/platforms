import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { TranslateModule, TranslateLoader, TranslateService  } from '@ngx-translate/core'


import { locale as english } from './locale/en'
import { locale as french } from './locale/fr'

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');  // https://angular.io/guide/i18n#i18n-pipes      //A5

import { HomeComponent} from './home.component'
import { OtherComponent } from './other.component';

import { PlatformMainComponent } from './Calculator/main-component'
import { PlatformMachinesComponent } from './Calculator/basic/machines.component'
import { PlatformServicesComponent } from './Calculator/servicesPlatforms/services.component'
import { PlatformServiceStepListComponent } from './Calculator/servicesPlatforms/service-step-list.component'
import { PlatformServiceListComponent } from './Calculator/servicesPlatforms/service-list.component'
import { PlatformServiceDetailComponent } from './Calculator/servicesPlatforms/service-detail.component'
import { PlatformServiceStepDetailComponent } from './Calculator/servicesPlatforms/service-step-detail.component'
import { PlatformServiceStepClientTypeCostComponent } from './Calculator/servicesPlatforms/service-step-clientType-cost.component'
import { PlatformLabourComponent } from './Calculator/basic/labour.component'
import { PlatformClientComponent } from './Calculator/basic/clientTypes.component'
import { PlatformCorrectionComponent } from './Calculator/basic/correction.component'
import { PlatformServiceSnapshotsComponent } from './Calculator/servicesPlatforms/service-snapshots.component'
import { PlatformServiceSnapshotListComponent } from './Calculator/servicesPlatforms/service-snapshot-list.component'
import { PlatformServiceSnapshotDetailComponent } from './Calculator/servicesPlatforms/service-snapshot-detail.component'
import { PlatformServiceCompareComponent } from './Calculator/servicesPlatforms/service-compare.component'
import { PlatformServiceCompareBaseComponent } from './Calculator/servicesPlatforms/service-compare-base.component'
import { PlatformClientsComponent } from './Calculator/basic/clients.component'
import { PlatformEnterprisesComponent } from './Calculator/basic/enterprises.component'
import { PlatformOffersComponent } from './Calculator/offers/offers.component'
import { PlatformOfferDetailComponent } from './Calculator/offers/offer-detail.component'
import { PlatformOfferListComponent } from './Calculator/offers/offer-list.component'

import { ProductDetailComponent }  from './Products/product-detail.component'
import { ProductListComponent }  from './Products/product-list.component'
import { ServiceDetailComponentRoutable }  from './Calculator/routables/service-detail.routable.component'

import { PlatformService } from './Calculator/services/platform.service'
import { ProductService } from './Products/services/products.service'

import { BasicDataServicesModule } from 'gg-basic-data-services'
import { UiModule } from 'gg-ui'
import { SearchHandleDataModule } from 'gg-search-handle-data'
import { TranslationLoaderService, TranslationServicesModule } from 'gg-translation'

@NgModule({
  declarations: [
    AppComponent, HomeComponent, OtherComponent,
    PlatformMainComponent, PlatformMachinesComponent, PlatformServicesComponent, PlatformServiceStepListComponent, PlatformServiceStepDetailComponent, PlatformServiceSnapshotsComponent, PlatformServiceSnapshotListComponent,
    PlatformLabourComponent, PlatformClientComponent, PlatformCorrectionComponent, PlatformServiceListComponent, PlatformServiceDetailComponent, PlatformServiceCompareComponent, PlatformServiceCompareBaseComponent, PlatformClientsComponent,
    PlatformServiceSnapshotDetailComponent, PlatformServiceStepClientTypeCostComponent, PlatformEnterprisesComponent, PlatformOffersComponent, PlatformOfferDetailComponent, PlatformOfferListComponent  ,
    ProductDetailComponent, ProductListComponent ,
    ServiceDetailComponentRoutable
  ],
  imports: [
    UiModule.forRoot(), SearchHandleDataModule.forRoot(), TranslationServicesModule.forRoot(), BasicDataServicesModule.forRoot(),    
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    Ng2AutoCompleteModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot(),
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "dashboard", component: OtherComponent }  ,
      { path: "calculator", component: PlatformMainComponent },
      { path: 'service/:id', component: ServiceDetailComponentRoutable }        
    ])        
  ],
  providers: [PlatformService, ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translateService: TranslateService ) {
    this.translateService.addLangs(["en", "fr"])
    this.translateService.setDefaultLang('en')
    this.translateService.use('fr')        

    var loadTranslations= (...args: ILocale[]): void => {
      const locales = [...args];
      locales.forEach((locale) => {
        this.translateService.setTranslation(locale.lang, locale.data, true);
      });
    }
    
    loadTranslations(english, french)

  }  

}

interface ILocale {
  lang: string;
  data: Object;
}