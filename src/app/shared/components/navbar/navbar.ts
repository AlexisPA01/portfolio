import { Component, signal } from '@angular/core';
import { LanguageService } from '../../services/language';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { flagUs, flagEs } from '@ng-icons/flag-icons';
import { TranslateService } from '../../services/translate';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIcon
  ],
  providers: [
    provideIcons({
      flagUs,
      flagEs
    })
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(public language: LanguageService, public translation: TranslateService) { }

  get text() {
    return this.translation.translations.navbar;
  }

  isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update(isOpen => !isOpen);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
