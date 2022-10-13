import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-long-button',
  templateUrl: './long-button.component.html',
  styleUrls: ['./long-button.component.css']
})
export class LongButtonComponent implements OnInit {

  

  constructor() { 
    this.title = '';
  }
  @Input() title: string;

  ngOnInit(): void {
  }

}
