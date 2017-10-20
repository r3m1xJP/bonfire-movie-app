import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CollectionService {
    constructor(private http: Http) { }

    getAllByUserId(id: number) {
        return this.http.get('http://localhost:3000/api/collections/user/' + id).map((response: Response) => response.json());
    }

    addMovie(collectionId: number, movieId: number) {
        return this.http.post('http://localhost:3000/api/collections/movies',
            JSON.stringify({ CollectionId: collectionId, MovieId: movieId}))
        .map((response: Response) => response.json());
    }
}
