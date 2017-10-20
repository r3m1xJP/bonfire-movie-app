import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TheMovieDBService {
    theMovieDBAPIKey = '312411ae03d023ba8a378dcc6de4c4a7';

    constructor(private http: Http) { }

    searchMovie(query: string) {
        return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' +
                              this.theMovieDBAPIKey + '&language=en-US&query=' +
                              query + '&page=1&include_adult=false')
        .map((response: Response) => response.json());
    }

    getGenres() {
        return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' +
                this.theMovieDBAPIKey + '&language=en-US')
        .map((response: Response) => response.json());
    }

    getNowPlaying(page = 1) {
        return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=' +
                              this.theMovieDBAPIKey + '&language=en-US&page=' + page)
            .map((response: Response) => response.json());
    }

    getComingSoon(page = 1) {
        return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=' +
                              this.theMovieDBAPIKey + '&language=en-US&region=US&page=' + page)
            .map((response: Response) => response.json());
    }

    getTopRating(page = 1) {
        return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=' +
                              this.theMovieDBAPIKey + '&language=en-US&region=US&page=' + page)
            .map((response: Response) => response.json());
    }
}
