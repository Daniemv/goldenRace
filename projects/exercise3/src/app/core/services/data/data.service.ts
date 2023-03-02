import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  /**
   * @name getNumbers
   * @description
   * Returns observable with a number value emmited each second
   * @return {*}  {Observable<number>}
   * @memberof DataService
   */
  public getNumbers(): Observable<number> {
    return timer(0, 1000).pipe(
      map(() => this.getRandomNumber())
    );
  }

  /**
   * @name getRandomNumber
   * @description
   * Get a random number between 0 and 10
   * @private
   * @return {*}  {number}
   * @memberof DataService
   */
  private getRandomNumber(): number {
    return Math.floor(Math.random() * 11);
  }
}
