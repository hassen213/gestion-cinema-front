import { Component, OnInit } from '@angular/core';
import {Projection} from "../projection";
import {ProjectionService} from "../projection.service";

@Component({
  selector: 'app-list-projection',
  templateUrl: './list-projection.component.html',
  styleUrls: ['./list-projection.component.css']
})
export class ListProjectionComponent implements OnInit {
  projections: any;
  film : any;

  constructor(private projectionService: ProjectionService) {
  }

  ngOnInit(): void {
    this.getProjection();

  }

  getProjection() {
    this.projectionService.getProjectionList().subscribe(data => {
      this.projections = data;
    });
  }

}
