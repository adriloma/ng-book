import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent implements OnInit {
  @Input() departments: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
