import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  iconOne: any = 'assets/icon/icon-white.svg';
  IconOneSelected: any = 'assets/icon/icon-orange.svg';
  // IconOneSelected: any = 'assets/icon/one-icon.png';
  oneSelected: number = 3
  constructor() { }
  selecTab(n) {
    this.oneSelected = n
  }

}
