import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SeznamiComponent} from './seznami/components/seznami.component';
import {SeznamPodrobnostiComponent} from './seznami/components/seznam-podrobnosti.component';
import { ArtikelDodajComponent } from './seznami/components/artikel-dodaj.component';
import { LoginComponent } from './seznami/components/login/login.component';
import { RegistrationComponent } from './seznami/components/registration/registration.component';

const routes: Routes = [
    {path: '', redirectTo: '/seznami', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'seznami/:id', component: SeznamPodrobnostiComponent},
    {path: 'seznami/:id/dodaj', component: ArtikelDodajComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
