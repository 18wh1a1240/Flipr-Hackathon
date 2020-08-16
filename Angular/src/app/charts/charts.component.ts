import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';  
import { HttpClient } from '@angular/common/http';  
import { Data } from '../../app/Data';
import { UserService } from '../user.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  url = 'http://localhost:58617/API/Charts/GetCharts';  
  data: Data[];  
  dates = [];  
  volume = [];  
  Linechart = [];  
  constructor(private httpClient: HttpClient, private service: UserService) { }  
  ngOnInit() {  
    //this.service.registerUser(this.user).subscribe((result: any) =>  {console.log(result); } ) ;
   /* this.service.getNse().subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.dates.push(x.PlayerName);  
        this.volume.push(x.Run);  
      });  */
        
   // });  
  }  

  ashokLey() {
    this.dates = ['2015-08-14', '2015-08-17', '2015-08-18', '2015-08-19', '2015-08-20'];  
    this.volume = ['155900', '174700', '153300', '130500', '184100'];  
    this  
      this.Linechart = new Chart('canvas', {  
        type: 'line',  
        data: {  
          labels: this.dates,  
          datasets: [  
            {  
              data: this.volume,  
              borderColor: '#3cb371',  
              backgroundColor: "white",  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });
  }

  cipla() {
    this.dates = ['2015-08-21', '2015-08-22', '2015-08-23', '2015-08-24', '2015-08-25'];  
    this.volume = ['154930', '174700', '153560', '137560', '194360'];  
    this  
      this.Linechart = new Chart('canvas', {  
        type: 'line',  
        data: {  
          labels: this.dates,  
          datasets: [  
            {  
              data: this.volume,  
              borderColor: '#3cb371',  
              backgroundColor: "white",  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });
  }

  reliance() {
    this.dates = ['2015-08-14', '2015-08-17', '2015-08-18', '2015-08-19', '2015-08-20'];  
    this.volume = ['61285', '174700', '153300', '35064', '184100'];  
    this  
      this.Linechart = new Chart('canvas', {  
        type: 'line',  
        data: {  
          labels: this.dates,  
          datasets: [  
            {  
              data: this.volume,  
              borderColor: '#3cb371',  
              backgroundColor: "white",  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });
  }

  tatasteel() {
    this.dates = ['2015-08-14', '2015-08-17', '2015-08-18', '2015-08-19', '2015-08-20'];  
    this.volume = ['35064', '174700', '250300', '13050', '19640'];  
    this  
      this.Linechart = new Chart('canvas', {  
        type: 'line',  
        data: {  
          labels: this.dates,  
          datasets: [  
            {  
              data: this.volume,  
              borderColor: '#3cb371',  
              backgroundColor: "white",  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });
  }

  eichermot() {
    this.dates = ['2015-08-14', '2016-08-25', '2015-08-26', '2015-09-1', '2015-09-10'];  
    this.volume = ['68978', '150093', '114798', '130500', '184100'];  
    this  
      this.Linechart = new Chart('canvas', {  
        type: 'line',  
        data: {  
          labels: this.dates,  
          datasets: [  
            {  
              data: this.volume,  
              borderColor: '#3cb371',  
              backgroundColor: "white",  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });
  }
}
