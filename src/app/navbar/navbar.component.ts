import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  searchString: string;

  constructor(private searchService: SearchService) {}

  addToSearchHistory() {
    let search = this.searchString;

    this.searchService.addSearchItem(search);
  }

  clearInput() {
    const input: HTMLInputElement = document.querySelector('#searchInput');
    this.searchString = '';
    input.value = '';
  }
}
