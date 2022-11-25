import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SimpleDateComponent } from "@hmcts-common";

@Component({
  selector: "eui-simple-date-page",
  standalone: true,
  imports: [CommonModule, SimpleDateComponent],
  templateUrl: "./simple-date-page.component.html",
  styleUrls: ["./simple-date-page.component.scss"],
})
export class SimpleDatePageComponent {}
