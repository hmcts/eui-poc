import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "eui-govuk-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
  @Input()
  labelText: string | undefined;
  @Output()
  clickAction: EventEmitter<Event> | undefined;
}
