import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './seznami/components/login/login.component';
import { RegistrationComponent } from './seznami/components/registration/registration.component';
import { ProcessForBuyingTicketComponent } from './seznami/components/process-for-buying-ticket/process-for-buying-ticket.component';
import { FlightListComponent } from './seznami/components/flight-list/flight-list.component';
import { NavbarComponent } from './seznami/components/navbar/navbar.component';

const routes: Routes = [
    {path: '/', redirectTo: '/seznami', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'buyingTickets', component: ProcessForBuyingTicketComponent},
    {path: 'flights', component: FlightListComponent},
    {path: 'navbar', component: NavbarComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}