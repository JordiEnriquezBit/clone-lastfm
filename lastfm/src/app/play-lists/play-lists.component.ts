import { MusicService } from './../music.service';
import { MusicInterface } from '../musicInterface';

import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-play-lists',
  templateUrl: './play-lists.component.html',
  styleUrls: ['./play-lists.component.scss'],
})
export class PlayListsComponent implements OnInit {
  musics;
  musicsFilter = [];
  title = 'Overview';
  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.getAllMusics();
  }
  getAllMusics() {
    /*this.musicService.getJSON().subscribe((data) => {
      this.musics = data as MusicInterface[];
      this.musicsFilter = this.musics;
    });*/
    this.musics = this.musicService.getJSON() as MusicInterface[];
    this.musicsFilter = this.musics;
  }
  compareNumbers(a, b) {
    return a.listeners - b.listeners;
  }
  changeList(header) {
    let i = 0;
    this.title = header



    this.musicsFilter = this.musics.filter((data) => {
      if (header == 'Overview') {
        return true;
      } else if (header == 'top') {
        if (data['@attr'].rank <   10) {
          return true;
        }
      } else if (header == 'biggest') {

          return true;
      }else{
        if(header == data.genre){
          return true;
        }
      }
      return false;
    });
    if (header == 'biggest') {
      this.musicsFilter.sort((a, b) => this.compareNumbers(a, b)).reverse();
    }
  }
}
