import { Component, OnInit, Input, Output, ViewChild, ElementRef, Renderer, Pipe, PipeTransform } from '@angular/core';

import { CollectionService } from '../../_services/index';

import { Collection } from '../../_models/index';
import { Movie } from '../../_models/index';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
    transform(val: any, searchText: string): any {
        if (searchText === '') {
            return val;
        };

        let returnArray: any[] = [];

        val.forEach((element: any) => {
            console.log(element.Title);
            console.log(searchText);
            if (element.Title.includes(searchText)) {
                returnArray.push(element);
            }
        });

        return returnArray;
    }
}

@Component({
    moduleId: module.id,
    selector: 'movie-list',
    templateUrl: 'movie-list.component.html',
    styleUrls: ['movie-list.component.css']
})

export class MovieListComponent implements OnInit {
    query: string = '';
    @Input() collection: Collection;
    @ViewChild('searchQuery') input: ElementRef;

    constructor(private renderer: Renderer,
                private collectionService: CollectionService) { }

    ngOnInit() {
        console.log(this.collection.Movies);
    }

    search() {
        // this.theMovieDBService.searchMovie(this.query)
        // .subscribe(
        //     data => {
        //         this.movies = data.results;

        //         this.loading = false;
        //     },
        //     error => {
        //         console.log(error);
        //         this.movies = [];
        //     });

        // this.renderer.invokeElementMethod(
        //     this.input.nativeElement, 'blur', []);
    }

    removeFromCollection(movie: any) {
        console.log(movie);
    }
}
