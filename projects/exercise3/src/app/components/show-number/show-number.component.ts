import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../core/services/data/data.service';

@Component({
  selector: 'app-show-number',
  templateUrl: './show-number.component.html',
  styleUrls: ['./show-number.component.scss']
})
export class ShowNumberComponent implements OnInit, OnDestroy {

  showedNumber: number = 0;
  subscription: Subscription = new Subscription();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getNumberBySecond();
  }

  getNumberBySecond(): void {
    this.subscription.add(this.dataService.getNumbers().subscribe(result => this.showedNumber = result));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
