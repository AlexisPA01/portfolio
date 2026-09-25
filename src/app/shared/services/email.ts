import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
export interface EmailForm {
    name: string | null;
    email: string | null;
    subject: string | null;
    message: string | null;
}

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    constructor(private http: HttpClient) { }

    sendEmail(data: EmailForm): Observable<any> {
        console.log("Enviar email");
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this.http.post<any>(
            'https://portfolio-email-e0u0.onrender.com/api/contact',
            data,
            httpOptions)
            .pipe(
                catchError((error) => throwError(() => 'Error'))
            );
    }
}
