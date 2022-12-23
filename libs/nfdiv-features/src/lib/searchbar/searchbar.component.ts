import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { debounceTime, distinctUntilChanged, filter, fromEvent, tap } from "rxjs";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'eui-searchbar',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatIconModule, FormsModule, MatButtonModule],
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit, AfterViewInit{

  @ViewChild("searchInput") searchInput!: ElementRef
  @Input()
  debounceRate!: number; // Add definite assignment here since this will be defaulted in On init if missing
  @Output()
  searchOutput = new EventEmitter();
  value: any;
  ngOnInit() {
    if (!this.debounceRate) {
      this.debounceRate = 300
    }
  }

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime( this.debounceRate),
        distinctUntilChanged(),
        tap(() => this.searchOutput.emit(this.searchInput.nativeElement.value))
      ).subscribe()
  }

  clearField() {
    this.value = '';
    this.searchOutput.emit('')
  }
}
