import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './seznami/components/login/login.component';
import { RegistrationComponent } from './seznami/components/registration/registration.component';
import { ProcessForBuyingTicketComponent } from './seznami/components/process-for-buying-ticket/process-for-buying-ticket.component';
import { FlightListComponent } from './seznami/components/flight-list/flight-list.component';

const routes: Routes = [
    {path: '/', redirectTo: '/seznami', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'buyingTickets', component: ProcessForBuyingTicketComponent},
    {path: 'flights', component: FlightListComponent}
    // {path: 'seznami/:id', component: SeznamPodrobnostiComponent},
    // {path: 'seznami/:id/dodaj', component: ArtikelDodajComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
