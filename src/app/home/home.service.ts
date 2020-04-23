import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  private searchSubject = new BehaviorSubject<string>('');
  private filterSubject = new BehaviorSubject<any>(null);
  private counterSubject = new BehaviorSubject<number>(0);
  private cardSortSubject = new BehaviorSubject<any>(null);


  searchSubscriber$ = this.searchSubject.asObservable();
  filterSubscriber$ = this.filterSubject.asObservable();
  cardCounterSubscriber$ = this.counterSubject.asObservable();
  cardSortOrderSubscriber$ = this.cardSortSubject.asObservable();

  updateCards(searchString: string) {
    this.searchSubject.next(searchString);
  }
  updateCounter(cardCounterSubscriber: number) {
    this.counterSubject.next(cardCounterSubscriber);
  }
  sortCards(sortObj: any) {
    this.cardSortSubject.next(sortObj);
  }
  filterCards(filterObj: any) {
    this.filterSubject.next(filterObj);
  }
}
