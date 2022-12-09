import { Injectable } from "@angular/core";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CaseResolver implements Resolve<boolean> {
  constructor() {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const triggerType = this.findTriggerType(route);
    route.data = { caseId: route.params['cid'], triggerType}
    return of(true);
  }

  private findTriggerType(route: ActivatedRouteSnapshot): string {
    const urlSegments = route.url;
    let foundIndex = -1;
    for (let i = 0; i < urlSegments.length; i++) {
      if (urlSegments[i].path === "trigger") {
        foundIndex = i;
        break;
      }
    }
    if (foundIndex > -1) {
      return urlSegments[foundIndex + 1].path;
    } else {
      return "";
    }
  }
}
