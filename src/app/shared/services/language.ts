import { Injectable, signal } from '@angular/core';

export type LanguageCode = 'es' | 'en';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    currentLanguage = signal<LanguageCode>('es');

    setLanguage(language: LanguageCode): void {
        this.currentLanguage.set(language);
    }
}
