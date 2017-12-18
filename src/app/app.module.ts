import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ItemService } from './item.service';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
