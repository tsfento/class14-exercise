import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchHistory: string[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchHistory = this.searchService.getSearchHistory();

    this.searchService.searchHistoryChanged.subscribe(
      (history: string[]) => {
        this.searchHistory = history;
      }
    );
  }
}
