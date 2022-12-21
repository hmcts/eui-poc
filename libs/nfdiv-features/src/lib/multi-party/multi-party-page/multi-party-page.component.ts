import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterHistoryService } from "@hmcts-common";
import { WindowService } from "@hmcts-common";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { CaseIdPipe } from "../../case-id/case-id.pipe";
import { FormsModule } from "@angular/forms";
import {
  MatListModule,
  MatSelectionList,
  MatSelectionListChange,
} from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { Party } from "@hmcts-data";
import { PartyService } from "@nfdiv/features";

@Component({
  selector: "eui-multi-party-page",
  standalone: true,
  imports: [
    CommonModule,
    CaseIdPipe,
    FormsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: "./multi-party-page.component.html",
  styleUrls: ["./multi-party-page.component.scss"],
})
export class MultiPartyPageComponent implements OnInit, OnDestroy {
  @ViewChild("partiesList") partiesList: MatSelectionList | undefined;
  private dataSubscription = new Subscription();
  public caseId = "";
  private caseTrigger = "";
  public addMode = false;
  public editMode = false;
  public editIcons = false;
  public selected = false;
  parties$: Observable<Party[]> | undefined;
  firstName = "";
  lastName = "";

  constructor(
    public routerHistoryService: RouterHistoryService,
    private windowService: WindowService,
    private route: ActivatedRoute,
    private partyService: PartyService
  ) {}

  ngOnInit() {
    this.parties$ = this.partyService.parties$;
    this.dataSubscription = this.route.data.subscribe((data) => {
      this.caseId = data["caseId"];
      this.caseTrigger = data["triggerType"];
      this.partyService.getParties(this.caseId);
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  showAddForm() {
    this.addMode = true;
    this.clearListSelection();
  }

  addParty(item: Party) {
    if (this.firstName.length && this.lastName.length) {
      let party = {
        id: 0,
        firstName: this.firstName,
        lastName: this.lastName
      } as Party;
      this.partyService.addParty(this.caseId, party);
      this.firstName = "";
      this.lastName = "";
      this.addMode = false;
      this.clearListSelection();
    }
  }

  deleteItem($event: MouseEvent) {
    const selectedID = this.getSelectedItem()?.id;
    if (selectedID) {
      this.deleteSelectedItem(selectedID);
      this.partiesList?.deselectAll();
    }
  }

  editItem($event: MouseEvent) {
    const selectedID = this.getSelectedItem()?.id;
    if (selectedID) {
      this.editSelectedItem(selectedID);
    }
  }

  emitSelection($event: MatSelectionListChange) {
    if (this.partiesList) {
      this.editIcons = Boolean(
        this.partiesList?.selectedOptions.selected.length > 0
      );
    }
  }

  private clearListSelection() {
    this.editIcons = false;
    this.partiesList?.deselectAll();
  }

  private getSelectedItem(): Party | undefined {
    return this.partiesList?.selectedOptions.selected[0].value;
  }

  private deleteSelectedItem(selectedID: number) {
    this.partyService.deleteParty(selectedID);
    this.partiesList?.deselectAll();
  }

  private editSelectedItem(selectedID: number) {
    const itemToEdit = this.partyService.getPartyById(selectedID);
    this.firstName = itemToEdit.firstName;
    this.lastName = itemToEdit.lastName;
    this.editMode = true;
  }

  submitEdit() {
    let selectedId = this.partiesList?.selectedOptions.selected[0].value.id
    if (selectedId) {
      let newItem = {
        id: selectedId,
        firstName: this.firstName,
        lastName: this.lastName,
        connectedCases: this.caseId
      } as Party;
      this.partyService.updateParty(selectedId, newItem);
      this.partiesList?.deselectAll();
      this.editMode = false;
    }
  }

  cancelEdit() {
    this.firstName = "";
    this.lastName = "";
    this.partiesList?.deselectAll();
    this.editMode = false;
  }
}
