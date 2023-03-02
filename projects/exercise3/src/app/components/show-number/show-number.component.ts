import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../core/services/data/data.service';

@Component({
  selector: 'app-show-number',
  templateUrl: './show-number.component.html',
  styleUrls: ['./show-number.component.scss']
})
export class ShowNumberComponent implements OnInit, OnDestroy {

  public showedNumber: number = 0;
  private subscription: Subscription = new Subscription();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getNumberBySecond();
  }

  /**
   * @name getNumberBySecond
   * @description
   * Get the numbers from data service
   * @private
   * @memberof ShowNumberComponent
   */
  private getNumberBySecond(): void {
    this.subscription = this.dataService.getNumbers().subscribe(result => this.showedNumber = result);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
