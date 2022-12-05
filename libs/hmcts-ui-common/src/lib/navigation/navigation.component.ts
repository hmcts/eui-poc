import { Component, Input } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NavLinks } from "../ui-common-model";

@Component({
  selector: 'eui-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
 @Input()
  links: NavLinks[] | undefined

}
