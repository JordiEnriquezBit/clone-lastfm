import { MusicService } from './../music.service';
import { MusicInterface } from '../musicInterface';

import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-play-lists',
  templateUrl: './play-lists.component.html',
  styleUrls: ['./play-lists.component.scss']
})
export class PlayListsComponent implements OnInit {

  musics;
  musicsFilter;
  title="";
  constructor(private musicService:MusicService) { }

  ngOnInit(): void {
    this.getAllMusics();
  }
getAllMusics(){
  this.musicService.getJSON().subscribe(data=>{
    this.musics = data as MusicInterface[]
    console.log(this.musics[0].artist.name);
  })
}
  changeList(header){

    this.musicsFilter= this.musics.filter(data=>{

    });
  }

}
