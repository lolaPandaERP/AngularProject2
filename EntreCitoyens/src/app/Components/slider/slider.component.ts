import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() images: string[] = ['image1.jpg', 'image2.jpg'];
  currentSlideIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.showNextSlide();
    }, 1500);
  }

  showNextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
  }

  showPreviousSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
  }
}
