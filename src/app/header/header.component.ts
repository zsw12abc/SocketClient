import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {OrderCenterService} from "../shared/Order-Center.service";
import {Observable} from "rxjs";

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
  }

  async onSearchOrders() {
    await this.orderCenterService.searchOrdersByPrice(this.ordersSearchRef.nativeElement.value === "" ? undefined : this.ordersSearchRef.nativeElement.value);
    console.log('ordersCount', this.ordersCount)
  }

  async onSearchingOrders($event: any) {
    this.searchText = $event.target.value;
    this.orderCenterService.ordersCount.subscribe((ordersCount) => {
      this.ordersCount = ordersCount;
    })
    await this.orderCenterService.searchOrdersByPrice($event.target.value === "" ? undefined : $event.target.value);
    console.log('ordersCount', this.ordersCount)
  }

}
