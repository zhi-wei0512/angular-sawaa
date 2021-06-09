import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  /** 是否顯示Menu */
  showMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
