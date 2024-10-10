import {Component, OnInit} from '@angular/core';
import {ArtService} from '../Services/art.service';
import {Router} from '@angular/router';
import {NgForOf} from '@angular/common';
import {GalleryListDetailComponent} from '../gallery-list-detail/gallery-list-detail.component';

@Component({
  selector: 'app-gallery-list',
  standalone: true,
  imports: [
    NgForOf,
    GalleryListDetailComponent
  ],
  templateUrl: './gallery-list.component.html',
  styleUrl: './gallery-list.component.css'
})
export class GalleryListComponent implements OnInit{

  /*
  Get data from the service
      Using DI in a constructor (Whats DI? Thats a good multiple choice question)
      Use DI to init the router
      NgOnInit to get the art pieces BEFORE the component loads
            NgonInit -> Constructor
      Set up clickable element so it displays the data
   */

  //Arrayto store local data
  artPieces: any[] = [] //iff we dont make  an interface we can use any[]
  selectedArtPiece: any; // no interface so its any

  constructor(private artService:ArtService,
              private router: Router) {
  }
  ngOnInit() {
    this.artPieces=this.artService.getArtPieces();
    //Gets all the artpieces before the components inits
  }


  onSelect(id: any){
     // this.selectedArtPiece = artPiece;

    this.router.navigate(['/art',id]);

  }


}
