import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models';

@Component({
  selector: 'wlp-item-card',
  templateUrl: './wlp-item-card.component.html',
  styleUrls: ['./wlp-item-card.component.scss'],
})
export class WlpItemCardComponent implements OnInit {
  @Input() data: Item | undefined;

  constructor() {}

  ngOnInit(): void {}
}
