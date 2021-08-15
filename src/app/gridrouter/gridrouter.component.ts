import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-gridrouter',
  templateUrl: './gridrouter.component.html',
  styleUrls: ['./gridrouter.component.css']
})
export class GridrouterComponent implements OnInit,OnDestroy {
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: any) {
    console.debug("Scroll Event");
  }
  i:any=0
  items: any = []
  constructor() { }

  ngOnInit(): void {
    for (this.i = 1; this.i <= 4; this.i++) {
      this.items.push(`Button '${this.i}' is clicked`);
    }
    window.addEventListener('scroll', this.scrollEvent, true); 
  }
  push(d: any) {
    alert(d)
  }
  scrollEvent = (event: any): void => {
      this.items.push(`Button '${this.i}' is clicked`);
      this.i++;
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }
}
