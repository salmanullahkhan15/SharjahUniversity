import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  popularServicesArray = [
    {
      title: 'Transportation Schedule',
      icon: 'https://via.placeholder.com/40x30.png/ffffff?text=%20',
      bgImg: 'https://via.placeholder.com/150x150.png/c4c4c4?text=%20',
    },

    {
      title: 'Explore University',
      icon: 'https://via.placeholder.com/40x30.png/ffffff?text=%20',
      bgImg: 'https://via.placeholder.com/150x150.png/c4c4c4?text=%20',
    },

    {
      title: 'Wireless Internet',
      icon: 'https://via.placeholder.com/40x30.png/ffffff?text=%20',
      bgImg: 'https://via.placeholder.com/150x150.png/c4c4c4?text=%20',
    },

    {
      title: 'City Keeper',
      icon: 'https://via.placeholder.com/40x30.png/ffffff?text=%20',
      bgImg: 'https://via.placeholder.com/150x150.png/c4c4c4?text=%20',
    },
  ]

  images: any = []
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.images.push({
        image: 'https://via.placeholder.com/190x210.png/c4c4c4?text=%20'
      })
    }
  }

}
