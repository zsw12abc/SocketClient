import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {OrderCenterService} from "../shared/Order-Center.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('SearchOrders', {static: true}) ordersSearchRef: ElementRef;
  ordersCount: number;
  searchText: string;

  constructor(private orderCenterService: OrderCenterService) {
  }

  ngOnInit(): void {
    let orders = this.orderCenterService.getAllOrders;
    this.ordersCount = this.orderCenterService.ordersCount;
  }

  onSearchOrders() {
    this.ordersCount = this.orderCenterService.searchOrdersByPrice(this.ordersSearchRef.nativeElement.value === "" ? undefined : this.ordersSearchRef.nativeElement.value);
  }

  onSearchingOrders($event: any) {
    this.searchText = $event.target.value;
    this.ordersCount = this.orderCenterService.searchOrdersByPrice($event.target.value === "" ? undefined : $event.target.value);
  }
}
