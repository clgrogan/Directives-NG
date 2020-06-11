import { Component } from "@angular/core";

@Component({
  selector: "ng-if",
  templateUrl: "./ng-if.component.html",
  styleUrls: ["../app.component.scss", "./ng-if.component.scss"],
})
export class NgIfComponent {
  courses = [];
  constructor() {
    this.courses = ["Angular 101", "Angular 123", "Angular 307"];
  }
}
