import { Component } from "@angular/core";

@Component({
  selector: "ng-style",
  templateUrl: "./ng-style.component.html",
  styleUrls: ["../app.component.scss", "./ng-style.component.scss"],
})
export class NgStyleComponent {
  canSave: boolean;
  constructor() {
    this.canSave = true;
  }
  onClick = () => (this.canSave = !this.canSave);
}
