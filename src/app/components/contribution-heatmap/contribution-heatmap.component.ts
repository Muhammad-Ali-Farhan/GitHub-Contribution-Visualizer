import { Component, Input, OnChanges } from '@angular/core';
import { Contribution } from '../../services/github.service';

@Component({
  selector: 'app-contribution-heatmap',
  templateUrl: './contribution-heatmap.component.html',
  styleUrls: ['./contribution-heatmap.component.css']
})
export class ContributionHeatmapComponent implements OnChanges {
  @Input() contributions: Contribution[] = [];
  maxCount = 0;

  ngOnChanges(): void {
    this.maxCount = Math.max(...this.contributions.map(c => c.count), 0);
  }

  getColor(count: number): string {
    if (this.maxCount === 0) {
      return '#eeeeee';
    }
    const intensity = count / this.maxCount;

    const lightColor = { r: 160, g: 216, b: 239 };
    const darkColor = { r: 0, g: 95, b: 115 };

    const r = Math.floor(lightColor.r - intensity * (lightColor.r - darkColor.r));
    const g = Math.floor(lightColor.g - intensity * (lightColor.g - darkColor.g));
    const b = Math.floor(lightColor.b - intensity * (lightColor.b - darkColor.b));
    return `rgb(${r}, ${g}, ${b})`;
  }
}
