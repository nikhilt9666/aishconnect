import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { Chart, registerables} from 'chart.js';

@Component({
  selector: 'app-daily-cahrt-popup',
  templateUrl: './daily-cahrt-popup.component.html',
  styleUrls: ['./daily-cahrt-popup.component.scss'],
})
export class DailyCahrtPopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    console.log('Data: ',this.data);
    this.groupChart();
  }
  groupChart() {
    var myBarChart = new Chart('groupChartDailyPopup', {
      type: 'bar',
      data: this.data,
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
  closePopup(){
    
  }

}
