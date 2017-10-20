import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../_services/index';
import { CollectionService } from '../_services/index';
import { GenreService } from '../_services/index';
import { MovieService } from '../_services/index';

import { Collection } from '../_models/index';
import { CollectionMovie } from '../_models/index';
import { Movie } from '../_models/index';

declare var notie: any;

@Component({
    moduleId: module.id,
    templateUrl: 'movies.component.html',
    styleUrls: ['movies.component.css']
})

export class MoviesComponent implements OnInit {
    collections: Collection[] = [];
    genres: any[] = [];

    constructor(private collectionService: CollectionService,
                private genreService: GenreService,
                private movieService: MovieService,
                private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.collectionService.getAllByUserId(this.authenticationService.getUserId())
        .subscribe(
            data => {
                this.collections = data.collections;
            },
            error => {
                notie.alert({ type: 3, text: error});
            });
        this.genreService.getAll()
        .subscribe(
            data => {
                this.genres = data.genres;
            },
            error => {
                notie.alert({ type: 3, text: error});
            });
    }

    addMovieToCollection(data: CollectionMovie) {
        data.movie.genres.forEach((genre: any) => {
            let dbGenre = this.genres.find(function(x: any) {
                return x.Name.toUpperCase() === genre.toUpperCase();
            });

            if (!dbGenre) {
                this.genreService.add(genre)
                .subscribe(
                    data => {
                        this.genres.push(data);
                    },
                    error => {
                        notie.alert({ type: 3, text: error});
                    });
            }
        });
        this.addMovie(data.collectionId, data.movie);
    }

    addMovie(collectionId: number, movie: any) {
        this.movieService.getByTitle(movie.title)
        .subscribe(
            result => {
                if (result.movie) {
                    this.addToCollection(collectionId, result.movie.id);
                } else {
                    this.movieService.add(movie)
                    .subscribe(
                        newMovie => {
                            this.addToCollection(collectionId, newMovie.id);

                            movie.genres.forEach((genre: any) => {
                                let genreId = this.genres.find(function(x: any) {
                                    return x.Name === genre;
                                }).id;

                                this.addMovieGenre(newMovie.id, genreId);
                            });
                        },
                        error => {
                            notie.alert({ type: 3, text: error});
                        });
                }
            },
            error => {
                notie.alert({ type: 3, text: error});
            });
    }

    addToCollection(collectionId: number, movieId: number) {
        this.collectionService.addMovie(collectionId, movieId)
        .subscribe(
            result => {
                notie.alert({ type: 1, text: 'Successfully added movie to collection.' });
            },
            error => {
                notie.alert({ type: 3, text: error});
            });
    }

    addMovieGenre(movieId: number, genreId: number) {
        this.movieService.addGenre(movieId, genreId)
        .subscribe(
            result => {
                notie.alert({ type: 1, text: 'Successfully added movie to collection.' });
            },
            error => {
                notie.alert({ type: 3, text: error});
            });
    }
}
