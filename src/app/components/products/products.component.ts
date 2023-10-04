import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  routeGuardName = '';

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.dataService.getData().subscribe((res) => {
    //   this.channelName = res;
    // });
    this.route.data.subscribe((res) => {
      this.routeGuardName = res['data'];
    });
  }
}
