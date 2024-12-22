import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {SeznamiComponent} from './seznami/components/seznami.component';
import {ArtikelDodajComponent} from './seznami/components/artikel-dodaj.component';
import {SeznamPodrobnostiComponent} from './seznami/components/seznam-podrobnosti.component';
import {SeznamiService} from './seznami/services/seznami.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        SeznamiComponent,
        SeznamPodrobnostiComponent,
        ArtikelDodajComponent,
    ],
    providers: [SeznamiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

