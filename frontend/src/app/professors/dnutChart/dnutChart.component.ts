import { Component, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth/auth.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
 

@Component({
 selector: 'dnutChart',
 templateUrl: 'dnutChart.component.html'
})
export class dnutChart implements OnInit {
 // Doughnut
 public doughnutChartLabels:string[] = ['Bueno', 'Medio', 'Malo'];
 public doughnutChartData:number[] = [5, 10, 15];
 public doughnutChartType:string = 'doughnut';
 private currentUser: any;
 private colors = [
    {
      backgroundColor: [
        'rgba(0, 255, 0, 0.4)',
        'rgba(255, 206, 86, 0.4)',
        'rgba(255, 0, 0, 0.4)',
        'rgba(0, 255, 0, 0)',
        'rgba(102, 0, 204, 0)',
        'rgba(255, 128, 0, 0)'
      ]
    }
    ];
    constructor (private dataService: DataService, private auth: AuthService) {
      
        }
        ngOnInit(){
          this.dataService.getUser(this.auth.currentUser.email).subscribe(data => {
            this.currentUser = data[0];
            console.log(this.currentUser.grupo);

            this.dataService.getMaxGrade(this.currentUser.grupo).subscribe(data => {
              data[0];
              console.log(data[0])
            })
            this.dataService.getMinGrade(this.currentUser.grupo).subscribe(data => {
              data[0];
              console.log(data[0])
            })

          });

          
        }
 // events
 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }
}