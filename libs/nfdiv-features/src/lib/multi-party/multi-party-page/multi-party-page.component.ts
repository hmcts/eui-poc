import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterHistoryService } from "@hmcts-common";
import { WindowService } from "@hmcts-common";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { CaseIdPipe } from "../../case-id/case-id.pipe";
import { FormsModule } from "@angular/forms";
import { MatListModule, MatSelectionList, MatSelectionListChange } from "@angular/material/list";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { v4 as uuidv4 } from 'uuid';

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
  public editMode = false;
  public editIcons = false;
  public selected = false;
  parties: Party[] = [];
  firstName  =''
  lastName  =''

  constructor(
    public routerHistoryService: RouterHistoryService,
    private windowService: WindowService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.dataSubscription = this.route.data.subscribe((data) => {
      this.caseId = data["caseId"];
      this.caseTrigger = data["triggerType"];
    });
    this.parties = this.createDummyData();
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  showAddForm() {
    this.editMode = true;
  }

  addParty() {
    if (this.firstName.length && this.lastName.length) {
      let party = {id: uuidv4(), firstName: this.firstName,lastName: this.lastName} as Party
      this.parties.push(party);
      this.firstName  =''
      this.lastName  =''
      this.editMode = false;
    }
  }

  deleteItem($event: MouseEvent) {
    const selectedID = this.getSelectedItem()?.id;
    if (selectedID) {
      this.deleteSelectedItem(selectedID)
    }
  }

  editItem($event: MouseEvent) {
    console.log($event)
  }

  emitSelection($event: MatSelectionListChange) {
    if(this.partiesList) {
      this.editIcons = Boolean(this.partiesList?.selectedOptions.selected.length > 0)
    }
  }

  private createDummyData():Party[] {
    let retValue = new Array<Party>();
    retValue.push({id: uuidv4(), firstName: 'party1_firstName', lastName:'party1_lastName'} as Party),
    retValue.push( {id: uuidv4(),firstName: 'party2_firstName', lastName:'party2_lastName'} as Party)
    return retValue;
  }

  private getSelectedItem():Party | undefined {
    return this.partiesList?.selectedOptions.selected[0].value
  }

  private deleteSelectedItem(selectedID: string) {
    const indexToRemove = this.parties.findIndex(x => x.id === selectedID );
    this.parties.splice(indexToRemove, 1);
  }
}

interface Party {
  id: string;
  firstName: string;
  lastName: string;
}

