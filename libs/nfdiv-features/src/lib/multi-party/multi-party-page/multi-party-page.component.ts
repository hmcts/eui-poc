import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterHistoryService } from "@hmcts-common";
import { WindowService } from "@hmcts-common";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { CaseIdPipe } from "../../case-id/case-id.pipe";
import { FormsModule } from "@angular/forms";
import { MatListModule, MatSelectionList, MatSelectionListChange } from "@angular/material/list";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { v4 as uuidv4 } from 'uuid';
import { Party } from "@hmcts-data";
import { MockPartyService } from "@nfdiv/features";


@Component({
  selector: "eui-multi-party-page",
  standalone: true,
  imports: [CommonModule, CaseIdPipe, FormsModule, MatListModule, MatButtonModule, MatIconModule],
  templateUrl: "./multi-party-page.component.html",
  styleUrls: ["./multi-party-page.component.scss"],
})
export class MultiPartyPageComponent implements OnInit, OnDestroy {
  @ViewChild('partiesList') partiesList : MatSelectionList | undefined
  private dataSubscription = new Subscription();
  public caseId = "";
  private caseTrigger = "";
  public addMode = false;
  public editMode = false;
  public editIcons = false;
  public selected = false;
  parties$: Observable<Party[]> | undefined;
  firstName  =''
  lastName  =''


  constructor(
    public routerHistoryService: RouterHistoryService,
    private windowService: WindowService,
    private route: ActivatedRoute,
    private partyService: MockPartyService
  ) {}

  ngOnInit() {
    this.parties$ = this.partyService.parties$;
    this.dataSubscription = this.route.data.subscribe((data) => {
      this.caseId = data["caseId"];
      this.caseTrigger = data["triggerType"];
    });

  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  showAddForm() {
    this.addMode = true;
  }

  addParty() {
    if (this.firstName.length && this.lastName.length) {
      let party = {id: uuidv4(), firstName: this.firstName,lastName: this.lastName} as Party
      this.partyService.addParty(party)
      this.firstName  =''
      this.lastName  =''
      this.addMode = false;
    }
  }

  deleteItem($event: MouseEvent) {
    const selectedID = this.getSelectedItem()?.id;
    if (selectedID) {
      this.deleteSelectedItem(selectedID)
    }
  }

  editItem($event: MouseEvent) {
    const selectedID = this.getSelectedItem()?.id;
    if (selectedID) {
      this.editSelectedItem(selectedID);
    }
  }

  emitSelection($event: MatSelectionListChange) {
    if(this.partiesList) {
      this.editIcons = Boolean(this.partiesList?.selectedOptions.selected.length > 0)
    }
  }



  private getSelectedItem():Party | undefined {
    return this.partiesList?.selectedOptions.selected[0].value
  }

  private deleteSelectedItem(selectedID: string) {
    this.partyService.deleteParty(selectedID)
  }

  private editSelectedItem(selectedID: string) {
    const itemToEdit = this.partyService.getPartyById(selectedID)
    this.firstName  = itemToEdit.firstName
    this.lastName  = itemToEdit.lastName
    this.editMode = true;
  }

  submitEdit() {

  }

  cancelEdit() {

  }
}



