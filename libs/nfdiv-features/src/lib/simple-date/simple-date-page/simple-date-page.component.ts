import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SaveButtonGroupComponent, SimpleDateComponent } from "@hmcts-common";
import { SimpleDateService } from "../simple-date.service";

@Component({
  selector: "eui-simple-date-page",
  standalone: true,
  imports: [CommonModule, SimpleDateComponent, SaveButtonGroupComponent],
  templateUrl: "./simple-date-page.component.html",
  styleUrls: ["./simple-date-page.component.scss"],
})
export class SimpleDatePageComponent {
  constructor(dateService: SimpleDateService) {}
}
