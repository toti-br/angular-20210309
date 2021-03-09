import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  logado = false
  username = '';

  users = [
    'bob', 'bob3345', 'superuserhahah'
  ];
}
