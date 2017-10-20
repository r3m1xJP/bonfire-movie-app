import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GenreService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('http://localhost:3000/api/genres').map((response: Response) => response.json());
    }

    add(name: string) {
        return this.http.post('http://localhost:3000/api/genres', JSON.stringify({ Name: name }))
        .map((response: Response) => response.json());
    }
}
