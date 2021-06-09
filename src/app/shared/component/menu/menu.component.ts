import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  /** 是否顯示Menu */
  @Input() showMenu: boolean;

  constructor() {}

  ngOnInit(): void {
    /** 多層menu  */
    $(function () {
      $('.List-item').click(function (e) {
        e.stopPropagation();
        $(this).children('ul').toggle();
      });
    });
    $(function () {
      $('.lvOne').click(function (e) {
        e.stopPropagation();
        $(this).children('ul').toggle();
      });
    });
  }
}
