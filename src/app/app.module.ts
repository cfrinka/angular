import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesService } from './movies.service';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [AppComponent, ListComponent, SearchComponent, ButtonComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [MoviesService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
