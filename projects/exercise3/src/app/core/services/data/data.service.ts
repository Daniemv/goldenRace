import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getNumbers(): Observable<number> {
    return timer(0, 1000).pipe(
      map(() => this.getRandomNumber())
    );
  }

  private getRandomNumber(): number {
    return Math.floor(Math.random() * 11);
  }
}
