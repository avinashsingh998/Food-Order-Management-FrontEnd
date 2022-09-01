import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from 'src/app/services/food/food-service.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags:Tag[] = [];
  constructor(private fs:FoodServiceService) { }

  ngOnInit(): void {
    this.tags = this.fs.getAllTags();
  }

  

}
