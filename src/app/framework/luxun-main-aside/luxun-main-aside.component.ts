import { Component, OnInit } from '@angular/core';
import { CategoryEntity } from '../../entity/category.entity';
import { CATEGORIES } from '../../data/categories.data';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'luxun-main-aside',
  templateUrl: './luxun-main-aside.component.html',
  styleUrls: ['./luxun-main-aside.component.css']
})
export class LuxunMainAsideComponent implements OnInit {
  protected categories: CategoryEntity[] = CATEGORIES;

  constructor(private location: Location,
    private router: Router, 
    private activatedRoute: ActivatedRoute) {        
}

  ngOnInit() {
  }

  public onSelect(category: CategoryEntity): void {
    this.router.navigate(['/category/', category.id], {relativeTo: this.activatedRoute});
    // this.location.go('/category/', `id=${category.id}`);
  }

}
