import { Injectable, inject } from '@angular/core';
import { LanguageService } from './language';
import translations from '../../../assets/language.json';

@Injectable({
    providedIn: 'root'
})
export class TranslateService {
    private language = inject(LanguageService);

    get translations() {
        return translations[this.language.currentLanguage()];
    }
}
