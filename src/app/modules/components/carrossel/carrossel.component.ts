import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective,
} from '@coreui/angular';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css'],
  standalone: true,
  imports: [
    ThemeDirective,
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    NgFor,
    CarouselItemComponent,
    CarouselControlComponent,
    RouterLink,
  ],
})
export class CarrosselComponent implements OnInit {
  constructor() {}

  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  ngOnInit(): void {
    this.slides[0] = {
      src: '../../../../assets/image/ImagemHorario.png',
    };
    this.slides[1] = {
      src: '../../../../assets/image/ImagemHorario.png',
    };
    this.slides[2] = {
      src: '../../../../assets/image/ImagemHorario.png',
    };
  }
}
