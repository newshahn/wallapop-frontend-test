import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models';
import { SubSink } from 'subsink';
import { WallapopRESTService } from 'src/app/services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'wlp-item-wrapper',
  templateUrl: './wlp-item-wrapper.component.html',
  styleUrls: ['./wlp-item-wrapper.component.scss'],
})
export class WlpItemWrapperComponent implements OnInit {
  private _subscriptions = new SubSink();
  private _cardsData: Item[] = [];

  constructor(private restService: WallapopRESTService) {}

  ngOnInit(): void {
    this._subscriptions.add(
      this.restService
        .getItems()
        .pipe(
          map((response) => {
            return (response as any).items;
          })
        )
        .subscribe((response) => {
          this._cardsData = Array.from(response);
        })
    );
  }

  get cardsData(): Item[] {
    return this._cardsData;
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }
}
