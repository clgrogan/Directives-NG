import { Component } from "@angular/core";

@Component({
  selector: "ng-track-by",
  templateUrl: "./ng-track-by.component.html",
  styleUrls: ["../app.component.scss", "./ng-track-by.component.scss"],
})
export class NgTrackByComponent {
  books;
  onClickLoadBooks = () => {
    this.books = [
      { id: 1, name: "IT" },
      { id: 2, name: "Pet Cemetary" },
      { id: 3, name: "The Mist" },
    ];
  };
  trackBook = (index, book) => (book ? book.id : undefined);
  // trackByMethod(index: number, el: any): number {
  //   return el.id;
  // }
}
