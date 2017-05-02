import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class TennisService {
    private baseUrl = 'http://localhost:3000';

    imageArraySub = new Subject<any>();
    imageArraySub$ = this.imageArraySub.asObservable();

    constructor(private http: Http) {
    }
    getImageArray(): Promise<any> {
        return this.http.get(`${this.baseUrl}/array`)
            .toPromise()
            .then(response => {
                this.imageArraySub.next(response.json());
            })
            .catch((error: any) => Observable.throw(error));
    }
}
