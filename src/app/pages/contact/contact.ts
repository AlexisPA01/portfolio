import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapEnvelope, bootstrapLinkedin, bootstrapGithub, bootstrapPerson, bootstrapHandThumbsUp, bootstrapDownload } from '@ng-icons/bootstrap-icons';
import { TranslateService } from '../../shared/services/translate';
import { EmailService } from '../../shared/services/email';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CVService } from '../../shared/services/cv';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  imports: [
    NgIcon,
    ReactiveFormsModule
  ],
  providers: [
    provideIcons({
      bootstrapEnvelope,
      bootstrapLinkedin,
      bootstrapGithub,
      bootstrapPerson,
      bootstrapHandThumbsUp,
      bootstrapDownload
    })
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor(public translation: TranslateService, private email: EmailService, public cv: CVService) { }

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4), Validators.maxLength(100)]),
    subject: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(200)]),
    message: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(5000)]),
  });

  get text() {
    return this.translation.translations.contact;
  }

  sendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();

      Swal.fire({
        icon: 'warning',
        title: this.text.alertWarning.title,
        text: this.text.alertWarning.text
      });

      return;
    }

    Swal.fire({
      title: this.text.alertWait,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    this.email.sendEmail(this.contactForm.getRawValue())
      .subscribe({
        next: (response) => {
          Swal.fire({
            icon: 'success',
            title: this.text.alertSuccess.title,
            text: this.text.alertSuccess.text
          });

          this.contactForm.reset();
        },

        error: (error) => {
          Swal.fire({
            icon: 'error',
            title: this.text.alertError.title,
            text: this.text.alertError.text
          });

          console.error('Error enviando el correo:', error);
        }
      });
  }
}
