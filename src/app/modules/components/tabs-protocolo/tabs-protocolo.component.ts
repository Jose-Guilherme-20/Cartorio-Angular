import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { CartorioService } from '../../services/cartorio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs-protocolo',
  standalone: true,
  imports: [MatTabsModule, MatIconModule, CommonModule],
  templateUrl: './tabs-protocolo.component.html',
  styleUrls: ['./tabs-protocolo.component.css'],
})
export class TabsProtocoloComponent implements AfterViewInit {
  isDataAvailable: boolean = false;
  tabs: any[] = [];
  currentTabIndex: number = 0;

  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  constructor(private cartorioService: CartorioService) {}

  ngOnInit(): void {
    this.cartorioService.data$.subscribe((data) => {
      if (data) {
        this.isDataAvailable = true;
        this.tabs = data.tabs;

        // Atualizar o índice da aba baseado no número de abas concluídas
        this.updateTabIndex();
      } else {
        this.isDataAvailable = false;
      }
    });
  }

  ngAfterViewInit() {
    // Forçar a atualização do índice da aba após a inicialização da visualização
    setTimeout(() => {
      if (this.tabGroup) {
        this.tabGroup.selectedIndex = this.currentTabIndex;
      }
    });
  }

  // Método para atualizar o índice da aba com base no número de abas concluídas
  updateTabIndex() {
    const completedTabCount = this.tabs.filter((tab) => tab.concluida).length;
    this.currentTabIndex = Math.min(completedTabCount, this.tabs.length - 1);
  }

  // Método para verificar se uma aba está concluída
  isTabConcluida(tabIndex: number): boolean {
    return this.tabs[tabIndex]?.concluida ?? false;
  }

  // Método para verificar se uma aba tem exigências pendentes
  hasPendingExigencia(tabIndex: number): boolean {
    return (
      this.tabs[tabIndex]?.exigencia?.some((item: any) => !item.concluida) ??
      false
    );
  }
}
