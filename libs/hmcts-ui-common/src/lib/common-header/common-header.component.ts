import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "eui-govuk-header",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./common-header.component.html",
  styleUrls: ["./common-header.component.scss"],
})
export class CommonHeaderComponent {}
