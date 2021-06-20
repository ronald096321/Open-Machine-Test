import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class LandingViewComponent implements OnInit {

  income:string= '';
  expenses:string = '';
  monthlyEmi : any ='';

  constructor() { }
  
  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
     if (window.pageYOffset > 20) {
       let element:any = document.getElementById('navbar');
           element.classList.add('sticky');
     } else {
      let element:any = document.getElementById('navbar');
        element.classList.remove('sticky'); 
     }
  }

  updateIncomeValue(event:any){
    this.income =this.numberWithCommas(event.value);
  }
  updateExpenseValue(event:any){
    this.expenses = this.numberWithCommas(event.value);
  }

  numberWithCommas(x:any) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

}
