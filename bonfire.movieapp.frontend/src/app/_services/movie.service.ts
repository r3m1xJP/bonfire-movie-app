import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Movie } from '../_models/index';

@Injectable()
export class MovieService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('http://localhost:3000/api/movies').map((response: Response) => response.json());
    }

    getByTitle(title: string) {
        return this.http.get('http://localhost:3000/api/movies/' + title).map((response: Response) => response.json());
    }

    add(movie: any) {
        return this.http.post('http://localhost:3000/api/movies',
            JSON.stringify({ Title: movie.title, Overview: movie.overview,
                ReleaseDate: movie.releaseDate, ImageUrl: movie.imageUrl }))
        .map((response: Response) => response.json());
    }

    addGenre(movieId: number, genreId: number) {
        return this.http.post('http://localhost:3000/api/movies/genres',
            JSON.stringify({ MovieId: movieId, GenreId: genreId}))
        .map((response: Response) => response.json());
    }
}
