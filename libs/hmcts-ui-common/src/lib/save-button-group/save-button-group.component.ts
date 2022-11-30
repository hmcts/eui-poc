import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "eui-govuk-save-button-group",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./save-button-group.component.html",
  styleUrls: ["./save-button-group.component.scss"],
})
export class SaveButtonGroupComponent {
  @Input()
  continue: boolean | undefined
  @Input()
  nextUrl: string | undefined;
  @Input()
  backUrl: string | undefined;
}
