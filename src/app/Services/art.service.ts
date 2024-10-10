import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  //Not suposed to store data here - but I am
  private artPieces = [
    {id: 1, name: "Mona Lisa", artist:"Leo", yearCreated: 1503},
    {id: 2, name:"Starry Night", artist: "Van Gogh", yearCreated: 1889},
    {id: 3, name :"The Persistance of Memory", artist: "Dali", yearCreated: 1931}
    //Can add more if needed
  ]

  getArtPieces(){
    return this.artPieces; //Can do an observable if you want, but didn't specify
  }

  getArtPieceById(id:number){
    return this.artPieces.find(art => art.id === id);
  }
  constructor() { }
}
