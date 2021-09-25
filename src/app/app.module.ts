import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './header/header.component';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderCenterService} from "./shared/Order-Center.service";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import {FormsModule} from "@angular/forms";

const config: SocketIoConfig = {url: 'http://localhost:4000', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [OrderCenterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
