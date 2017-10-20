import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { Routing }        from './app.routing';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService, TheMovieDBService,
         CollectionService, GenreService, MovieService } from './_services/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { MoviesComponent, SearchMovieComponent, NowPlayingComponent,
         ComingSoonComponent, TopRatedComponent } from './movies/index';
import { CollectionsComponent, MovieListComponent, FilterPipe } from './collections/index';

import { MatCardModule, MatToolbarModule, MatInputModule, MatButtonModule,
         MatMenuModule, MatIconModule, MatTabsModule, MatProgressSpinnerModule,
         MatDialogModule } from '@angular/material';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, HttpModule,
                  Routing, MatCardModule, MatToolbarModule, MatInputModule, MatButtonModule,
                  MatMenuModule, MatIconModule, MatTabsModule, MatProgressSpinnerModule,
                  MatDialogModule ],
  declarations: [ AppComponent, LoginComponent, HomeComponent, MoviesComponent, SearchMovieComponent,
                  NowPlayingComponent, ComingSoonComponent, TopRatedComponent, CollectionsComponent,
                  MovieListComponent, FilterPipe ],
  providers:    [ AuthGuard, AuthenticationService, UserService, TheMovieDBService, CollectionService,
                  GenreService, MovieService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
