import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import { SearchHomePageComponent } from './seznami/components/search-home-page/search-home-page.component';
import { LoyaltyComponent } from './seznami/components/loyalty/loyalty.component';
import { ProfileComponent } from './seznami/components/profile/profile.component';
import { FlightStatusComponent } from './seznami/components/flight-status/flight-status.component';
import { WeatherAndDelayComponent } from './seznami/components/weather-and-delay/weather-and-delay.component';
import { DetailForPickedFlightComponent } from './seznami/components/detail-for-picked-flight/detail-for-picked-flight.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        SearchHomePageComponent,
        LoyaltyComponent,
        ProfileComponent,
        FlightStatusComponent,
        WeatherAndDelayComponent,
        DetailForPickedFlightComponent
    ],
    declarations: [
        AppComponent,

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
