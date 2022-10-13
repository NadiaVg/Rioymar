import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-squared-button',
  templateUrl: './squared-button.component.html',
  styleUrls: ['./squared-button.component.css']
})
export class SquaredButtonComponent implements OnInit {

  constructor() {
    this.image='';
    this.text='';
   }

   @Input() image: string;
   @Input() text: string;

  ngOnInit(): void {
  }

}
