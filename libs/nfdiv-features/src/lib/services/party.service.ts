import { Injectable } from "@angular/core";
import { Party } from "@hmcts-data";
import { v4 as uuidv4 } from "uuid";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PartyService {
  parties$ = new BehaviorSubject(this.createDummyData());

  constructor() {}

  getPartyById(id: string): Party {
    let ind = this.parties$.value.findIndex((x) => x.id === id);
    return this.parties$.value[ind];
  }
  addParty(item: Party) {
    this.parties$.value.push(item);
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
    retValue.push({
      id: uuidv4(),
      firstName: "party1_firstName",
      lastName: "party1_lastName",
    } as Party),
      retValue.push({
        id: uuidv4(),
        firstName: "party2_firstName",
        lastName: "party2_lastName",
      } as Party);
    return retValue;
  }
}
