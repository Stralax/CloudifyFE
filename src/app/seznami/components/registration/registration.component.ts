import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './registration.component.html',
  styleUrls: ['../../../../public/css/registration.css']
})
export class RegistrationComponent {

  constructor(
    private router: Router,
  ) { }




  onSave(): void {


    this.doRegister();

  }

  private doRegister() {  // <--------- PROCES REGISTRIRANJA POST METODA
  //   this.injectDetect();
  //   this.authenticationService
  //     .register(this.credentials)
  //     .pipe(
  //       catchError((error: HttpErrorResponse) => {
  //         this.showPopup('Registration failed. Please try again. (Try using a different username/email address.)');

  //         return throwError(() => error);
  //       })
  //     )
  //     .subscribe(() => {
  //       this.registrationService.sendWelcomeEmail(this.credentials.email).subscribe(() => {
  //         console.log("Welcome email sent");
  //       });
  //       this.router.navigateByUrl(this.historyService.getLastNonLoginUrl());
  //     });

  this.router.navigateByUrl("/");
  }
}
