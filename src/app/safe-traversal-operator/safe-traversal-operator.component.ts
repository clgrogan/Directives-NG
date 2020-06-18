import { Component } from "@angular/core";

@Component({
  selector: "safe-nav-operator",
  templateUrl: "./safe-traversal-operator.component.html",
  styleUrls: [
    "../app.component.scss",
    "./safe-traversal-operator.component.scss",
  ],
})
export class SafeTraversalOperatorComponent {
  task = {
    title: "Review applications",
    assignee: { name: "Ronald MC", ID: 747 },
  };
  onClick = (name: string, id: number) =>
    this.task.assignee === null
      ? (this.task.assignee = { name: name, ID: id })
      : (this.task.assignee = null);
}
