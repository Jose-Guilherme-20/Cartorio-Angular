import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CartorioService } from '../../services/cartorio.service';

@Component({
  selector: 'app-buttons-protocolo',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './buttons-protocolo.component.html',
  styleUrl: './buttons-protocolo.component.css',
})
export class ButtonsProtocoloComponent {
  inputId: string = '';
  input2: string = '';
  input3: string = '';
  constructor(private cartorioService: CartorioService) {}

  fetchData() {
    // Simule a busca de dados com base no ID
    const id = this.inputId;
    const simulatedData = this.simulateDataFetch(id);
    // console.log(simulatedData);
    this.cartorioService.setData(simulatedData);
  }

  simulateDataFetch(id: string) {
    const data = {
      id: '1',
      concluida: true,
      tabs: [
        {
          id: '1',
          concluida: true,
          obterDocumento: {
            exigencia: [
              { exigencia: 'Aguardando documentação', concluida: true },
              { exigencia: 'Aguardando identidade do José', concluida: true },
            ],
          },
        },
        {
          id: '2',
          concluida: true,
          AguardandoAssinatura: {
            exigencia: [
              { exigencia: 'Aguardando documento adicional', concluida: true },
              { exigencia: 'Aguardando assinatura final', concluida: true },
            ],
          },
        },
      ],
    };

    return data;
  }
  handleRedirect(inputElement: HTMLInputElement) {
    const seloTribunal = inputElement.value;
    window.location.href = `https://see.tjgo.jus.br/verificacao/${seloTribunal}`;

    inputElement.value = '';
  }
}
