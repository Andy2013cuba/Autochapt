import { Component, ViewEncapsulation, ViewChild, OnInit } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Parallax,Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',  
  styleUrls: ['./slide.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SlideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
