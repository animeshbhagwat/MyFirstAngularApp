import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todaydate;
  public persondata = [];

  constructor( private myservice: MyserviceService) {};
  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    this.myservice.getData().subscribe( (data) => {
      this.persondata = Array.from(Object.keys(data), k=>data[k]);
      console.log( this.persondata );
    } )
  }

  title = 'welcome to angular';
  description = "welcome to my first angular project";
  months = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"];
  isAvailable = true;

  setTrue() {
    this.isAvailable = true;
    console.log("Variable set to True");
  };
  setFalse() {
    this.isAvailable = false;
    console.log("Variable set to False");
  };

  simplePipeData = "This Is Going Really Well!";
  
  firstFeature = {
    heading: "feature one",
    body: "some feature details for first feature for demo."
  };
  secondFeature = {
    heading: "feature two",
    body: "some feature details for second feature for demo."
  };
  thirdFeature = {
    heading: "feature three",
    body: "some feature details for third feature for demo."
  };
  fourthFeature = {
    heading: "feature four",
    body: "some feature details for fourth feature for demo."
  };
}
