import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Message} from '../message-model';

@Injectable()
export class MessageService {

    private url = 'http://localhost:3000/messages';

    constructor(private httpClient: HttpClient) {
    }

    getMessages(): Observable<Message[]> {
        return this.httpClient.get<Message[]>(this.url);
    }

}
