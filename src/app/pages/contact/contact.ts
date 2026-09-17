import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapEnvelope, bootstrapLinkedin, bootstrapGithub, bootstrapPerson, bootstrapHandThumbsUp, bootstrapDownload } from '@ng-icons/bootstrap-icons';
import { TranslateService } from '../../shared/services/translate';
import { EmailService } from '../../shared/services/email';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CVService } from '../../shared/services/cv';

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
    email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
    subject: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(200)]),
    message: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(5000)]),
  });

  get text() {
    return this.translation.translations.contact;
  }

  sendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.email.sendEmail(this.contactForm.getRawValue())
      .subscribe({
        next: (response) => {
          console.log(response.message);

          this.contactForm.reset();
        },

        error: (error) => {
          console.error('Error enviando el correo:', error);
        }
      });
  }
}
