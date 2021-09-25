import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { OrderListComponent } from './order-list/order-list.component';
import {OrderCenterService} from "./shared/Order-Center.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [OrderCenterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
