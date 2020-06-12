import { Component } from "@angular/core";

@Component({
  selector: "ng-for",
  templateUrl: "./ng-for.component.html",
  styleUrls: ["../app.component.scss", "./ng-for.component.scss"],
})
export class NgForComponent {
  constructor() {}
  courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" },
  ];
}
