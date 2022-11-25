import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "eui-govuk-footer",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./common-footer.component.html",
  styleUrls: ["./common-footer.component.scss"],
})
export class CommonFooterComponent {}
