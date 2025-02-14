import { Component, Input, ViewChild, ElementRef, OnChanges, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartData } from 'chart.js';
import { Contribution } from '../../services/github.service';

@Component({
  selector: 'app-contribution-chart',
  templateUrl: './contribution-chart.component.html',
  styleUrls: ['./contribution-chart.component.css']
})
export class ContributionChartComponent implements OnChanges, AfterViewInit {
  @Input() contributions: Contribution[] = [];
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart: Chart | undefined;

  ngAfterViewInit(): void {
    this.initChart();
  }

  ngOnChanges(): void {
    if (this.chart) {
      this.updateChart();
    }
  }

  initChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;
    const data: ChartData = {
      labels: this.contributions.map(c => c.date).reverse(),
      datasets: [{
        label: 'Daily Contributions',
        data: this.contributions.map(c => c.count).reverse(),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      }]
    };
    const config: ChartConfiguration = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Contributions'
            },
            beginAtZero: true
          }
        }
      }
    };
    this.chart = new Chart(ctx, config);
  }

  updateChart(): void {
    if (!this.chart) return;
    this.chart.data.labels = this.contributions.map(c => c.date).reverse();
    this.chart.data.datasets[0].data = this.contributions.map(c => c.count).reverse();
    this.chart.update();
  }
}
