import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { MoviesComponent } from './movies/index';
import { CollectionsComponent } from './collections/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'movies', component: MoviesComponent, canActivate: [AuthGuard] },
    { path: 'collections', component: CollectionsComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);
