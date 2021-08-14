import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import studentList from './studentdata.json'
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Sort } from '@angular/material/sort';
export interface StudentList {
  Name: String;
  Class: number;
  Section: String;
  Sub1: number;
  Sub2: number;
  Sub3: number;
}
@Component({
  selector: 'app-studenttable',
  templateUrl: './studenttable.component.html',
  styleUrls: ['./studenttable.component.css']
})
export class StudenttableComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject<any>();
  public studentList: any[] = studentList;
  sortedData: any[];
  header: any = []
  constructor() { }

  ngOnInit(): void {
    this.sortedData = this.studentList.slice();
    this.getheader()
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 25,
      ordering: false
    };
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  getheader() {
    this.header = this.studentList.map(item => Object.keys(item))
    console.log(this.header)
  }
  sortData(sort: Sort) {
    console.log(sort)
    const data = this.studentList.slice();
    console.log(data)
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      if (!sort.active || sort.direction === '') {
        this.sortedData = data;
        this.dtTrigger.next()
        return;
      }

      this.sortedData = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'Name': return compare(a.Name, b.Name, isAsc);
          case 'Class': return compare(a.Class, b.Class, isAsc);
          case 'Section': return compare(a.Section, b.Section, isAsc);
          case 'Sub1': return compare(a.Sub1, b.Sub1, isAsc);
          case 'Sub2': return compare(a.Sub2, b.Sub2, isAsc);
          case 'Sub3': return compare(a.Sub3, b.Sub3, isAsc);
          default: return 0;
        }
      });
      this.dtTrigger.next()
    })
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
