import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'prpo-app',
    template: `
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    naslov = 'Nakupovalni seznami';
}