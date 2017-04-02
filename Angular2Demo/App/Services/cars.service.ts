import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class CarsService {
    private _baseUrl: string = "https://jsonplaceholder.typicode.com/photos";
    constructor(private _http: Http) {

    }
    getCarImages(): Observable<any[]>{
        return this._http.get(this._baseUrl).map(this.extractData).catch(this.handleError);
    }
    extractData(res: Response) {
        let response = res.json();
        if (response.StatusCode == 401) {
            location.reload();
        } else {
            let body = response;
            return body || {};
        }
    }
    handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        let errorResponse = error.json();
        if (errorResponse.StatusCode == 401) {
            location.reload();
        }
        return Observable.throw(errMsg);
    } 
}