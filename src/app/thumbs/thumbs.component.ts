import { Component, OnInit } from '@angular/core';
import {TennisService} from "../tennis.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-thumbs',
  templateUrl: './thumbs.component.html',
  styleUrls: ['./thumbs.component.css']
})
export class ThumbsComponent implements OnInit {
    imageSubscription: Subscription;
    images: any[];
    baseUrl = 'http://localhost:3000';

  constructor(private tennisServe: TennisService) {
      this.imageSubscription = tennisServe.imageArraySub$.subscribe(
          array => {
              this.images = [];
              array.forEach((imageName) => {
                  this.images.push(`${this.baseUrl}/${imageName}`);
              });
          }
      );
  }

  ngOnInit() {
      this.tennisServe.getImageArray();
  }

}
