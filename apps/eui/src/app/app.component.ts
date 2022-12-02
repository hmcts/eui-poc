import { Component } from "@angular/core";

@Component({
  selector: "eui-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "eui";
  logoTypeText = "MyHMCTS"
  headerServiceName = 'Manage Cases'
  // Currently hard coded but this could be dynamically loaded via a service
  navLinks = [
    {  label:'Case list', url:'/cases' },
    {  label:'Create Case', url:'/cases/case-filter' },
    {  label:'Notice of change', url:'/noc' },
    ]
   // Ditto
  footerLinks = [
    {  label:'Case list', url:'/cases' },
    {  label:'Create Case', url:'/cases/case-filter' },
    {  label:'Notice of change', url:'/noc' },
  ]
}
