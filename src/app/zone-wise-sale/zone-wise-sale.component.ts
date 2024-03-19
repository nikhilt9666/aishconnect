import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables} from 'chart.js/auto';
import {
  MatDialog
} from '@angular/material/dialog';

@Component({
  selector: 'app-zone-wise-sale',
  templateUrl: './zone-wise-sale.component.html',
  styleUrls: ['./zone-wise-sale.component.scss']
})
export class ZoneWiseSaleComponent implements OnInit {
zoomChartFunction() {
throw new Error('Method not implemented.');
}
returnDashboad() {
throw new Error('Method not implemented.');
}

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
  }

}
