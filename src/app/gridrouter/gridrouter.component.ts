import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-gridrouter',
  templateUrl: './gridrouter.component.html',
  styleUrls: ['./gridrouter.component.css']
})
export class GridrouterComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) scrollHandler(event:any) {
    console.debug("Scroll Event"+event);
  }
  items: any = []
  constructor() { }

  ngOnInit(): void {
    for (var i = 1; i <= 4; i++) {
      this.items.push(`Button '${i}' is clicked`);
    }
  }
  push(d:any){
    alert(d)
  }
  // scrollHandler(e:any){
  //  console.log(e)
  // }
}
