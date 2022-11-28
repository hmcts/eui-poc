import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "eui-govuk-save-button-group",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./save-button-group.component.html",
  styleUrls: ["./save-button-group.component.scss"],
})
export class SaveButtonGroupComponent {}
