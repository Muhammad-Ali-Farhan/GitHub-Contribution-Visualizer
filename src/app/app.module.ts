import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { ContributionHeatmapComponent } from './components/contribution-heatmap/contribution-heatmap.component';
import { ContributionChartComponent } from './components/contribution-chart/contribution-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    ContributionHeatmapComponent,
    ContributionChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
