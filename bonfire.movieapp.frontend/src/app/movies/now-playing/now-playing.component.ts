import { Component, OnInit } from '@angular/core';

import { TheMovieDBService } from '../../_services/index';

@Component({
    moduleId: module.id,
    selector: 'now-playing',
    templateUrl: 'now-playing.component.html',
    styleUrls: ['now-playing.component.css']
})

export class NowPlayingComponent implements OnInit {
    movies: any[] = [];

    constructor(private theMovieDBService: TheMovieDBService) { }

    ngOnInit() {
        this.theMovieDBService.getNowPlaying(1)
        .subscribe(
            data => {
                this.movies = data.results;
            },
            error => {
                console.log(error);
            });
    }
}
