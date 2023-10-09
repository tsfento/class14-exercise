import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appRandomBgColor]'
})
export class RandomBgColorDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @HostBinding('style.backgroundColor') randomColor: string;

  ngOnInit(): void {
    this.randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  }

  @HostListener('mouseenter') mouseOver(event: Event) {
    this.randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}