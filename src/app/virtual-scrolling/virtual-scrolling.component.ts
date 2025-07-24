import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scrolling',
  standalone: false,
  templateUrl: './virtual-scrolling.component.html',
  styleUrl: './virtual-scrolling.component.scss'
})
export class VirtualScrollingComponent implements OnInit{
  
  items = Array.from({length: 100000}).map((value, i) => `Item #${i}`);

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
