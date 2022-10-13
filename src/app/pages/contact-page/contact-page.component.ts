import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contactForm: FormGroup<{ email: FormControl<any>; consult: FormControl<any>; }>;
  

  

  constructor() { 
    this.contactForm = new FormGroup({
      email: new FormControl(),
      consult: new FormControl()
    })
  }
  

  ngOnInit(): void {
  }

}
