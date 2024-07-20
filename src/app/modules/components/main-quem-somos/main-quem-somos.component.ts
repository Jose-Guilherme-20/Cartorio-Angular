import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-quem-somos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-quem-somos.component.html',
  styleUrl: './main-quem-somos.component.css',
})
export class MainQuemSomosComponent {
  currentSection: string = 'missao';

  showSection(section: string) {
    this.currentSection = section;
    console.log(this.currentSection);
  }
}
