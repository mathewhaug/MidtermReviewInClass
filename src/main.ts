import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {GalleryListComponent} from './app/gallery-list/gallery-list.component';
import {GalleryListDetailComponent} from './app/gallery-list-detail/gallery-list-detail.component';
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';
import {AboutArtistComponent} from './app/about-artist/about-artist.component';
//Now we have to add our routes
const routes: Routes = [
  {path: 'art', component: GalleryListComponent},
  {path: 'art/:id', component: GalleryListDetailComponent},
  {path:'about',component: AboutArtistComponent},
  {path:"",redirectTo:'/art', pathMatch:'full'},//default path
  {path: '**', component: PageNotFoundComponent}
]
bootstrapApplication(AppComponent,{
  providers:[provideRouter(routes)]
}).then(r =>console.log("Yay it BootStrapped!"))
