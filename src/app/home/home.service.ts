import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  private cardsSource = new BehaviorSubject<string>('');
  private cardCounterSource = new BehaviorSubject<number>(0);

  cards$ = this.cardsSource.asObservable();
  cardCounter$ = this.cardCounterSource.asObservable();

  updateCards(searchString: string) {
    this.cardsSource.next(searchString);
  }
  updateCounter(cardCounter: number) {
    this.cardCounterSource.next(cardCounter);
  }
}
