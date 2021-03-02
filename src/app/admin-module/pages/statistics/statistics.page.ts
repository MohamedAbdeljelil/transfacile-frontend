import { Component, OnInit } from '@angular/core';
import {Chart} from 'Chart.js'
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  title = 'dashboard';
  chart;
  chart2 = [];

  pie: any;
  doughnut: any;

  data1 = [];

  ngOnInit() {

    // socket.on('data1', (res) => {
    //   this.updateChartData(this.chart, res, 0);
    //   this.updateChartData(this.doughnut,res.slice(0,5), 0);
    // })

    // socket.on('data2', (res) => {
    //   this.updateChartData(this.chart, res, 1);
    // })

    this.chart = new Chart('bar', {
      type: 'bar',

      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Nombre d\'avis par date'
        },
      },
      data: {
        labels: ['19-01-2020', '20-01-2020', '21-01-2020', '22-02-2020'],
        datasets: [
          {
            type: 'bar',
            label: 'Avis par Date',
            data: [15, 25, 20, 30],
            backgroundColor: 'rgb(47,255,0)',
            borderColor: 'rgb(0,34,255)',
            fill: false,
          },

          // {
          //   type: 'line',
          //   label: 'Dataset 2',
          //   backgroundColor: 'rgba(0,0,255,0.4)',
          //   borderColor: 'rgba(0,0,255,0.4)',
          //   data: [
          //     443, 256, 165, 100, 56, 65, 35, 543
          //   ],
          //   fill: true,
          // },
          // {
          //   type: 'bar',
          //   label: 'My Second dataset',
          //   data: [243, 156, 365, 30, 156, 265, 356, 543].reverse(),
          //   backgroundColor: 'rgba(0,0,255,0.4)',
          //   borderColor: 'rgba(0,0,255,0.4)',
          //   fill: true,
          // }
        ]
      }
    });
    this.chart2 = new Chart('doughnut',{
      type: 'bar',

      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Nombre de reservations par date'
        },
      },
      data: {
        labels: ['02-02-2021', '03-02-2021', '04-02-2021', '05-02-2021'],
        datasets: [
          // {
          //   type: 'bar',
          //   label: 'Avis par Date',
          //   data: [9, 15, 20, 25],
          //   backgroundColor: 'rgb(47,255,0)',
          //   borderColor: 'rgb(0,34,255)',
          //   fill: false,
          // },

          // {
          //   type: 'line',
          //   label: 'Dataset 2',
          //   backgroundColor: 'rgba(0,0,255,0.4)',
          //   borderColor: 'rgba(0,0,255,0.4)',
          //   data: [
          //     443, 256, 165, 100, 56, 65, 35, 543
          //   ],
          //   fill: true,
          // },
          {
            type: 'bar',
            label: 'Reservation par date',
            data: [19, 20, 15, 5,20].reverse(),
            backgroundColor: 'rgb(0,115,255)',
            borderColor: 'rgb(0,255,93)',
            fill: true,
          }
        ]
      }
    });
  }

}
