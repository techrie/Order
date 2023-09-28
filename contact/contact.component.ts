import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('f',{static:false}) contactForm!: NgForm;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
 
  
  onSubmit() {
    console.log(this.contactForm);
    this.router.navigate(['contactSubmit'], {relativeTo: this.route});
  }

}
