import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {HttpClientModule} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {Message} from '../message-model';

@Injectable()
export class MessageService {

    private url = 'http://localhost:3000/messages';

    constructor(private http: Http) {
    }

    getMessages(): Observable<Message[]>{
        return this.http
        .get(this.url)
        .map((response: Response) => {
            return <Message[]>response.json();
        })
        .catch(this.handleError);
    }

    getMessages2(): Observable<Message[]>{
        return this.http.get<Message[]>(this.url);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}