import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';


import { SwiperModule } from "swiper/angular";

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, SwiperModule],  
  
})
export class AppModule {}