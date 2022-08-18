import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  name = 'ikram akbar';
  details = {
    name: "ikram",
    age: 25
    
  }

  constructor() {}

  ngOnInit(): void {
    this.newFunc();
  }

  // call a function which will display welcome in the console page
  newFunc() {
    console.log(this.name);
    // console.log("Hello Ikram from your first angular app");
    return this.details;
  }
}
