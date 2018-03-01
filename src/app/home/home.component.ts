import { Component, OnInit } from '@angular/core';
/* import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations'; */
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  /* animations: [

    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1})

          ]))
        ]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0})

          ]))
        ]), {optional: true})
      ])
    ])
  ] */
})
export class HomeComponent implements OnInit {
  itemCount: number;
  noRecord: string = 'No Record Found';
  btnTxt: string = 'Add an item';
  goalText: string = 'My first life goal';
  goals = []; //'My first goal', 'my last goal', 'my middle goal'

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);
    this.itemCount = this.goals.length;
  }
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }
  removeItem(i) {
    const confirms = confirm('Are you sure you want to delete the index? ' + i);
    if (confirms) {
      this.goals.splice(i, 1);
      this.itemCount = this.goals.length;
      this._data.changeGoal(this.goals);
    } else {
      return false;
    }
  }

}
