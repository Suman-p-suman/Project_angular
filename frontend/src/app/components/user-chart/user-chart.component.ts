import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HighestGrossingMovies } from './data';
import { IgxLegendComponent, IgxCategoryChartComponent } from 'igniteui-angular-charts';

@Component({
  selector: 'app-user-chart',
  templateUrl: './user-chart.component.html',
  styleUrls: ['./user-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserChartComponent implements AfterViewInit { 
  @ViewChild("legend", { static: true }) private legend!: IgxLegendComponent;
  @ViewChild("chart", { static: true }) private chart!: IgxCategoryChartComponent;

  private _highestGrossingMovies: HighestGrossingMovies | undefined;

  public get highestGrossingMovies(): HighestGrossingMovies {
    if (this._highestGrossingMovies == undefined) {
      this._highestGrossingMovies = new HighestGrossingMovies();
    }
    return this._highestGrossingMovies;
  }

  public constructor(private _detector: ChangeDetectorRef) { }

  public ngAfterViewInit(): void {
    this.chart.dataSource = this.highestGrossingMovies;
    this.chart.legend = this.legend;
    this._detector.detectChanges(); // Ensuring change detection after view initialization
  }
}
