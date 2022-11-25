import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
/*
From https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style#dates
Dates
use upper case for months: January, February
do not use a comma between the month and year: 4 June 2017
when space is an issue - in tables or publication titles, for example - you can use truncated months: Jan, Feb
we use ‘to’ in date ranges - not hyphens, en rules or em dashes. For example:
tax year 2011 to 2012
Monday to Friday, 9am to 5pm (put different days on a new line, do not separate with a comma)
10 November to 21 December
do not use quarter for dates, use the months: ‘department expenses, Jan to Mar 2013’
when referring to today (as in a news article) include the date: ‘The minister announced today (14 June 2012) that…’
 */
@Component({
  selector: "eui-simple-date",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./simple-date.component.html",
  styleUrls: ["./simple-date.component.scss"],
})
export class SimpleDateComponent {}
