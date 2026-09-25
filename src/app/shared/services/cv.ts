import { Injectable, inject } from '@angular/core';
import { LanguageService } from './language';

@Injectable({
    providedIn: 'root'
})
export class CVService {
    private language = inject(LanguageService);

    downloadCV(event: Event): void {
        event.preventDefault();
        const cvPath = this.language.currentLanguage() === 'es'
            ? 'cv/cv-es.pdf'
            : 'cv/cv-en.pdf';

        const link = document.createElement('a');
        link.href = cvPath;
        link.download = this.language.currentLanguage() === 'es'
            ? 'CV-Alexis-Patiño-Agudelo-ES.pdf'
            : 'CV-Alexis-Patino-Agudelo-EN.pdf';

        link.click();
    }
}
