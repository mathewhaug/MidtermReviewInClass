import {Component, Input, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {ArtService} from '../Services/art.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-gallery-list-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './gallery-list-detail.component.html',
  styleUrl: './gallery-list-detail.component.css'
})
export class GalleryListDetailComponent implements OnInit{
  @Input() artPiece!:any; //if you have an interface. Use it

  //Navigating to parmaterized routes so we dont need input anymore

  //Constructor for DI
  constructor(private artService:ArtService,
              private router:Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{

      this.artPiece = Number(params.get('id'));

    })
  }

}
