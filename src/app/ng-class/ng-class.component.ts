import { Component } from "@angular/core";

@Component({
  selector: "ng-class",
  templateUrl: "./ng-class.component.html",
  styleUrls: ["../app.component.scss", "./ng-class.component.scss"],
})
export class NgClassComponent {
  isActive: boolean;
  constructor() {
    this.isActive = false;
  }
  onClick = () => (this.isActive = !this.isActive);
}
