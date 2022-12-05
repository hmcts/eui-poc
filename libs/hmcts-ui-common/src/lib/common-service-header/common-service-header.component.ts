import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "../navigation/navigation.component";
import { NavLinks } from "../ui-common-model";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "eui-govuk-service-header",
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: "common-service-header-component.html",
  styleUrls: ["./common-service-header.component.scss"],
})
export class CommonServiceHeaderComponent {
  @Input() serviceName: string | undefined;
  @Input()
  logoTypeText: any;
  @Input() navLinks: NavLinks[] | undefined;
  @Input()
  showCrownLogo = false;
}
