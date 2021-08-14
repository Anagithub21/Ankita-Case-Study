import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  itemarr = [
    { price: 101, order: 1, img: '../../../assets/headphone.jpg' }, { price: 102, order: 2, img: '../../../assets/headphone.jpg' }, { price: 103, order: 3, img: '../../../assets/headphone.jpg' }, { price: 104, order: 4, img: '../../../assets/headphone.jpg' }, { price: 105, order: 5, img: '../../../assets/headphone.jpg' }, { price: 106, order: 6, img: '../../../assets/headphone.jpg' }, { price: 107, order: 7, img: '../../../assets/headphone.jpg' }, { price: 108, order: 8, img: '../../../assets/headphone.jpg' }, { price: 109, order: 9, img: '../../../assets/headphone.jpg' }, { price: 110, order: 10, img: '../../../assets/headphone.jpg' },
    { price: 101, order: 11, img: '../../../assets/watch.jpg' }, { price: 102, order: 12, img: '../../../assets/watch.jpg' }, { price: 103, order: 13, img: '../../../assets/watch.jpg' }, { price: 104, order: 14, img: '../../../assets/watch.jpg' }, { price: 105, order: 15, img: '../../../assets/watch.jpg' }, { price: 106, order: 16, img: '../../../assets/watch.jpg' }, { price: 107, order: 17, img: '../../../assets/watch.jpg' }, { price: 108, order: 18, img: '../../../assets/watch.jpg' }, { price: 109, order: 19, img: '../../../assets/watch.jpg' }, { price: 110, order: 20, img: '../../../assets/watch.jpg' },
    { price: 101, order: 21, img: '../../../assets/headphone.jpg' }, { price: 102, order: 22, img: '../../../assets/headphone.jpg' }, { price: 103, order: 23, img: '../../../assets/headphone.jpg' }, { price: 104, order: 24, img: '../../../assets/headphone.jpg' }, { price: 105, order: 25, img: '../../../assets/headphone.jpg' }, { price: 106, order: 26, img: '../../../assets/headphone.jpg' }, { price: 107, order: 27, img: '../../../assets/headphone.jpg' }, { price: 108, order: 28, img: '../../../assets/headphone.jpg' }, { price: 109, order: 29, img: '../../../assets/headphone.jpg' }, { price: 110, order: 30, img: '../../../assets/headphone.jpg' },
    { price: 101, order: 31, img: '../../../assets/watch.jpg' }, { price: 102, order: 32, img: '../../../assets/watch.jpg' }, { price: 103, order: 33, img: '../../../assets/watch.jpg' }, { price: 104, order: 34, img: '../../../assets/watch.jpg' }, { price: 105, order: 35, img: '../../../assets/watch.jpg' }, { price: 106, order: 36, img: '../../../assets/watch.jpg' }, { price: 107, order: 37, img: '../../../assets/watch.jpg' }, { price: 108, order: 38, img: '../../../assets/watch.jpg' }, { price: 109, order: 39, img: '../../../assets/watch.jpg' }, { price: 110, order: 40, img: '../../../assets/watch.jpg' },

  ]
  defaultarr:any=[]
  layouttype: string = 'GRID'
  constructor() { }
  ngOnInit(): void {
    this.defaultarr=[...this.itemarr]
  }
  changelayout(type: string) {
    this.layouttype = type
  }
  pricefilter(e: any) {
    if (e.target.value == 'priceasc') {
      this.itemarr.sort((a, b) => b.price - a.price);
    }
    if (e.target.value == 'pricedesc') {
      this.itemarr.sort((a, b) => a.price - b.price);
    }
    if(e.target.value=='default'){
      this.itemarr=this.defaultarr
    }
  }
}
