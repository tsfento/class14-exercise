import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchHistory: string[] = [];

  searchHistoryChanged = new EventEmitter<string[]>();

  getSearchHistory() {
    return this.searchHistory.slice();
  }

  addSearchItem(search: string) {
    this.searchHistory.push(search);
    this.searchHistoryChanged.emit(this.searchHistory.slice());
  }
}
