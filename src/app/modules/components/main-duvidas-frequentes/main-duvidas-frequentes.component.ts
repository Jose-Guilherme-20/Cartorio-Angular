import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-main-duvidas-frequentes',
  templateUrl: './main-duvidas-frequentes.component.html',
  styleUrl: './main-duvidas-frequentes.component.css',
})
export class MainDuvidasFrequentesComponent {
  items = [
    {
      id: 'procuracao',
      title: 'Procuração pública',
      content:
        'Procuração Pública é um documento feito no Cartório de Notas ou no Consulado brasileiro onde nomeia-se alguém para representação legal em atos jurídicos em nome de outra pessoa.',
      visible: false,
    },
    {
      id: 'autenticacao',
      title: 'Autenticação de documentos',
      content:
        'Uma cópia autenticada, nada mais é que uma reprodução de um documento, que é assegurado pelo Decreto de Lei nº 2.148, esta lei, permite a produção de cópias autenticadas e confere a mesma validade que a original. No cartório, o tabelião assegura que a cópia seja idêntica ao original. Para tanto, o requerente deve apresentar no cartório, o título original e pedir ao funcionário que seja tirada uma cópia autenticada.',
      visible: false,
    },
    {
      id: 'tabelionato',
      title: 'O Tabelionato é do governo?',
      content:
        'É importante ressaltar que apesar do tabelião ser um servidor público, os servicos notariais são privados feitos por delegação do poder público. Como você pode acompanhar, no artigo 236 da Constituição de 1988.',
      visible: false,
    },
    {
      id: 'reconhecimento',
      title: 'Reconhecimento de assinatura',
      content:
        'Reconhecimento de assinaturas presencial – Feita com reconhecimento da letra e assinatura, ou só da assinatura, conforme a forma exigida por lei para a prática do ato, em documentos escritos e assinados, ou apenas assinados na presença de quem o vai reconhecer. Reconhecimento de assinaturas por semelhança – Reconhecimento feito através da simples confrontação da assinatura apresentada com a assinatura constante do documento de identificação ou de qualquer outro documento permitido por lei.',

      visible: false,
    },
  ];

  mostraResposta(id: string) {
    this.items.forEach((item) => {
      item.visible = item.id === id;
    });
  }
}
