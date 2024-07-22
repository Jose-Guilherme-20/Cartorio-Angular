import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-tabs-protocolo',
  standalone: true,
  imports: [MatTabsModule, MatIconModule],
  templateUrl: './tabs-protocolo.component.html',
  styleUrl: './tabs-protocolo.component.css',
})
export class TabsProtocoloComponent {}
