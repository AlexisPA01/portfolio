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
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this.http.post<any>(
            'http://localhost:3000/api/contact',
            data,
            httpOptions)
            .pipe(
                catchError((error) => throwError(() => 'Error'))
            );
    }
}
