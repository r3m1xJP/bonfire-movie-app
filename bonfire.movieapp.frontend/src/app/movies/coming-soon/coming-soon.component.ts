import { Component, OnInit } from '@angular/core';

import { TheMovieDBService } from '../../_services/index';

@Component({
    moduleId: module.id,
    selector: 'coming-soon',
    templateUrl: 'coming-soon.component.html',
    styleUrls: ['coming-soon.component.css']
})

export class ComingSoonComponent implements OnInit {
    movies: any[] = [];

    constructor(private theMovieDBService: TheMovieDBService) { }

    ngOnInit() {
        this.theMovieDBService.getComingSoon(1)
        .subscribe(
            data => {
                this.movies = data.results;
            },
            error => {
                console.log(error);
            });
    }
}
