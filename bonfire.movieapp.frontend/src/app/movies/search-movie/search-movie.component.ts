import { Component, OnInit, Input, Output, ViewChild, ElementRef, Renderer, EventEmitter } from '@angular/core';

import { TheMovieDBService } from '../../_services/index';

import { Collection } from '../../_models/index';
import { CollectionMovie } from '../../_models/index';
import { Movie } from '../../_models/index';

@Component({
    moduleId: module.id,
    selector: 'search-movie',
    templateUrl: 'search-movie.component.html',
    styleUrls: ['search-movie.component.css']
})

export class SearchMovieComponent implements OnInit {
    movies: any[] = [];
    genres: any[] = [];
    query: string = '';
    loading: boolean = false;

    @Input() collections: Collection[] = [];
    @Output() addMovieToCollection = new EventEmitter<CollectionMovie>();
    @ViewChild('searchQuery') input: ElementRef;

    constructor(private theMovieDBService: TheMovieDBService,
                private renderer: Renderer) { }

    ngOnInit() {
        this.movies = [];

        this.theMovieDBService.getGenres()
        .subscribe(
            data => {
                this.genres = data.genres;
            },
            error => {
                console.log(error);
            });
    }

    search() {
        this.loading = true;

        this.theMovieDBService.searchMovie(this.query)
        .subscribe(
            data => {
                this.movies = data.results;

                this.loading = false;
            },
            error => {
                console.log(error);
                this.movies = [];
            });

        this.renderer.invokeElementMethod(
            this.input.nativeElement, 'blur', []);
    }

    addToCollection(collectionId: number, movie: any) {
        let newData = new CollectionMovie();
        let newMovie = new Movie();

        newMovie.title = movie.title;
        newMovie.overview = movie.overview;
        newMovie.releaseDate = movie.release_date;
        newMovie.imageUrl = movie.poster_path;
        newMovie.genres = [];

        movie.genre_ids.forEach((genreId: number) => {
            let genre = this.genres.find(function(x: any) {
                return x.id === genreId;
            });

            if (genre) {
                newMovie.genres.push(genre.name);
            }
        });

        newData.collectionId = collectionId;
        newData.movie = newMovie;

        this.addMovieToCollection.emit(newData);
    }
}
