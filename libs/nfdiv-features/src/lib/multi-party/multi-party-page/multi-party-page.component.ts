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
      let party = {firstName: this.firstName,lastName: this.lastName} as Party
      this.parties.push(party);
      this.firstName  =''
      this.lastName  =''
      this.editMode = false;
    }
  }

  deleteItem($event: MouseEvent) {
    
  }

  editItem($event: MouseEvent) {
    
  }

  emitSelection($event: MatSelectionListChange) {
    if(this.partiesList) {
      this.editIcons = Boolean(this.partiesList?.selectedOptions.selected.length > 0)
    }
  }

  private createDummyData():Party[] {
    let retValue = new Array<Party>();
    retValue.push({firstName: 'party1_firstName', lastName:'party1_lastName'} as Party),
    retValue.push( {firstName: 'party2_firstName', lastName:'party2_lastName'} as Party)
    return retValue;
  }
}

interface Party {
  firstName: string;
  lastName: string;
}

