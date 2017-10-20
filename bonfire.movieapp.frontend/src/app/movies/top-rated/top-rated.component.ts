import { Component, OnInit } from '@angular/core';

import { TheMovieDBService } from '../../_services/index';

@Component({
    moduleId: module.id,
    selector: 'top-rated',
    templateUrl: 'top-rated.component.html',
    styleUrls: ['top-rated.component.css']
})

export class TopRatedComponent implements OnInit {
    movies: any[] = [];

    constructor(private theMovieDBService: TheMovieDBService) { }

    ngOnInit() {
        this.theMovieDBService.getTopRating(1)
        .subscribe(
            data => {
                this.movies = data.results;
            },
            error => {
                console.log(error);
            });
    }
}
