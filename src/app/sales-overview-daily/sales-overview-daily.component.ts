import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables} from 'chart.js';
import {
  MatDialog
} from '@angular/material/dialog';
import { DailyCahrtPopupComponent } from './daily-cahrt-popup/daily-cahrt-popup.component';

@Component({
  selector: 'app-sales-overview-daily',
  templateUrl: './sales-overview-daily.component.html',
  styleUrls: ['./sales-overview-daily.component.scss']
})
export class SalesOverviewDailyComponent implements OnInit {

  constructor(private router: Router,public dialog: MatDialog) { }
  salesData: any = {
    salesMM : 50.99,
    momPer : '43%',
    salesYY: 99.96,
    yerPer : '43%',
    salesTargetMonth : 80.94,
    salesTargetMonthPer : '56%',
    salesTargetYear : 99.99,
    salesTargetYearPer : '43%',
    targetAchivementMM : 50.99,
    targetAchivementPer : '43%',
    targetAchivementYY: 99.96,
    targetAchivementyerPer : '43%',
    salesLastYearMonth : 80.94,
    salesLastYearMonthPer : '56%',
    salesLastYearY : 99.99,
    salesLastYearYPer : '43%',
    monthlySale: '6.085',
    monthlySalesDesc: '15% ',
    monthlySalesTotalDesc: 'increse seen last week'
  }
  ngOnInit(): void {
    this.groupChart();
  }
  chartData :any ={}
  groupChart() {
    var data = {
      labels: ["01 Feb", "02 Feb", "03 Feb","04 Feb", "05 Feb", "06 Feb", "07 Feb"],
      datasets: [{
        label: "FTD",
        backgroundColor: "#5F6AD6",
        data: [30, 70, 40,45, 50, 75 ,40]
      }, {
        label: "SSD",
        backgroundColor: "#2534BB",
        data: [34, 71, 49,30, 55, 85,50]
      }, {
        label: "Generic",
        backgroundColor: "#071F5E",
        data: [36, 60, 40,55, 59, 70,65]
      }, {
        label: "Aishcare",
        backgroundColor: "#05147F",
        data: [40, 65, 30,58, 49, 60,45]
      }, {
        label: "Heathcare",
        backgroundColor: "#000446",
        data: [39, 71, 49,30, 38, 75,80]
      }
    ]
    };
    this.chartData=data;
    var myBarChart = new Chart('groupChartDaily', {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          
            x: {
               grid: {
                  display: false
               }
            },
            y: {
               grid: {
                  display: true
               }
            
         }
        },
      }
    });
  }
  returnDashboad(){
    this.router.navigate(['']);
  }
  zoomChartFunction(){
    this.dialog.open(DailyCahrtPopupComponent, {
      data: this.chartData,
      height: '90vh', width: '100vw',
    });
  
  }

}

