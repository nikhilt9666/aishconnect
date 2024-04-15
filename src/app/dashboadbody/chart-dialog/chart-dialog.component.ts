import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Chart, ChartDataset, registerables} from 'chart.js';
@Component({
  selector: 'app-chart-dialog',
   templateUrl: './chart-dialog.component.html',
  
  styleUrls: ['./chart-dialog.component.scss']
})
export class ChartDialogComponent implements OnInit {


  // constructor(@Inject(MAT_DIALOG_DATA) public chartData: ChartDataset[]) {}

  // ngAfterViewInit(): void {
  //   // Render chart in the dialog
  //   const canvas = document.getElementById('salesOverView') as HTMLCanvasElement;
  //   const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  //   new Chart(ctx, {
  //     type: 'bar',
  //     data: { datasets: this.chartData },
  //     options: { responsive: true, maintainAspectRatio: false }
  //   });
  // }


  constructor(@Inject(MAT_DIALOG_DATA) public data: { chartImage: string }) {}

  // @ViewChild('canvas', { static: true })
  // canvas!: ElementRef<HTMLCanvasElement>;

  // ngAfterViewInit() {
  //   this.data.chart.canvas = this.canvas.nativeElement;
  //   this.data.chart.resize();
  // }

  ngOnInit(): void {
  }

}
