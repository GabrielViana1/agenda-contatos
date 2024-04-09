import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{ //OnInit é um metodo que é chamado quando o a tela desse componente é iniciado
  //Variaveis do component
  grafico: Chart = new Chart(); //Variavel do grafico, chart é um tipo de classe do angular-highcharts
  tipo: string = 'bar'

  ngOnInit(): void {
    const dados = [['exemplo 1', 10] , ['exemplo 2', 20], ['exemplo 3', 30], ['exemplo 3', 15]]; //Dados do grafico
    const nomes = ['nome 1', 'nome 2', 'nome 3', 'nome 4']; //Nomes do grafico

    this.grafico = new Chart({
      chart: { type: this.tipo}, //Tipo do gráfico
      title: {text: 'Resumo de agenda de contatos'}, 
      subtitle: {text: 'Exemplo de gráficos - Highcharts'},
      series: [{
        data: dados, type: undefined as any //Dados do gráfico
      }],
      xAxis: {
        categories: nomes //Eixo X terá os nomes
      },
      legend: {enabled: false}, //Sem legenda
      credits: {enabled: false} //E sem marca d'gua do highchart
    })

  }
}
