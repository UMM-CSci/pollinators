import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import {environment} from '../../environments/environment';

import {Nugget} from "./nugget";

@Injectable()
export class HomeService {
    readonly baseUrl: string = environment.API_URL + 'nuggets';

    constructor(private http: HttpClient) {
    }

    getNuggets(): Observable<Nugget[]> {
        return this.http.get<Nugget[]>(this.baseUrl);
    }

    getNuggetById(id: string): Observable<Nugget> {
        return this.http.get<Nugget>(this.baseUrl + '/' + id);
    }

}
