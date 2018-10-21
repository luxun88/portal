import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'luxun-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { 
    console.info('category')
  }

  ngOnInit() {
  }

}
