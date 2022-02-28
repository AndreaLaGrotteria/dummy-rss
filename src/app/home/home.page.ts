
import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';

import { RssServiceService } from '../services/rss-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  public res;
  public clicked = new Array<boolean>(10).fill(false);

  constructor(private rss: RssServiceService) {}

  ngOnInit(): void {
    var url: string =  "https://www.theverge.com/rss/index.xml";

    this.rss.fetchFromUrl(url).subscribe(data => {
      //console.log(data);
      this.res = data;
      
      //console.log(this.clicked)
      //console.log(this.res[0]["content"][0]["_"]);
    });
  }

  toggleSection(i) {
    this.clicked[i] = !this.clicked[i];
  }

  public async fetchRss() {

    
  }

  

}
