import { Injectable } from "@angular/core";
import { Party } from "@hmcts-data";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MockPartyService {
  parties$ = new BehaviorSubject(this.createDummyData());

  constructor() {

  }

  getPartyById(id: string): Party {
    let ind = this.parties$.value.findIndex((x) => x.id === id);
    return this.parties$.value[ind];
  }
  addParty(item: Party) {
    item.id = '12345'
    this.parties$.value.push(item);
    return item;
  }
  updateParty(item: Party) {
    let ind = this.parties$.value.findIndex((x) => x.id === item.id);
    this.parties$.value[ind] = item;
  }
  deleteParty(id: string) {
    let ind = this.parties$.value.findIndex((x) => x.id === id);
    this.parties$.value.splice(ind,1);
  }

  //TO DO replace this with a real call to endpoint
  private createDummyData(): Party[] {
    let retValue = new Array<Party>();
    retValue.push(
       {
        id: "2d532789-32d5-49fa-a030-a72634b6196d",
        firstName: "party1_firstName",
        lastName: "party1_lastName"
       } as Party);
      retValue.push({
        id: "2d532789-32d5-49fa-a030-a72634b6196d",
        firstName: "party2_firstName",
        lastName: "party2_lastName",
      } as Party);
    return retValue;
  }
}
