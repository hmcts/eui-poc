import { Injectable } from "@angular/core";
import { Party } from "@hmcts-data";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "../../../../../apps/eui/src/environment/environment";
import { BehaviorSubject, Observable, throwError } from "rxjs";
const BASE_PATH = environment.BASE_URL;
const API_PATH = environment.API_URL;

@Injectable({
  providedIn: "root",
})
export class PartyService {

  private _caseSensitive = false;
  get caseSensitive(): boolean {
    return this._caseSensitive;
  }

  set caseSensitive(value: boolean) {
    this._caseSensitive = value;
  }
  get parties$(): BehaviorSubject<Party[]> {
    return this._parties$;
  }
  private _filter: string | undefined;
  get filter(): string | undefined {
    return this._filter;
  }
  set filter(value: string | undefined) {
    this._filter = value;
    if (this._filter?.length) {
      let filteredList = this.filtered(this.unfilteredList);
      this._parties$.next(filteredList);
    }else {
      this.parties$.next(this.unfilteredList);
    }
  }


  private _parties$ = new BehaviorSubject<Party[]>([]);

  private unfilteredList: Party[] = []
  constructor(private http: HttpClient) {}

  partiesURL = `${BASE_PATH}${API_PATH}/party`;
  //partiesURL = `http://localhost:4200/microsite/nfdiv/api/party`
  getParties(caseId: string) {
    let url = `${this.partiesURL}?caseId=${caseId}`;
    this._parties$.next([]);
    this.http.get(url).subscribe((res) => {
      this.unfilteredList = res as Party[];
      if (this.filter != undefined && this.filter.length && res) {
        let incoming = res as Party[];
        let filteredList = this.filtered(incoming, this.caseSensitive);
        this._parties$.next(filteredList);
      } else {
        this._parties$.next(<Party[]>res);
      }
    });
  }

  private filtered( incoming: Party[], caseSensitive?: boolean) {
    if (caseSensitive) {
      return incoming.filter((x) => {
        return (
          x.firstName.includes(<string>this.filter) ||
          x.lastName.includes(<string>this.filter)
        );
      });
    }else {
      return incoming.filter((x) => {
        return (
          x.firstName.toLowerCase().includes(<string>this.filter?.toLowerCase()) ||
          x.lastName.toLowerCase().includes(<string>this.filter?.toLowerCase())
        );
      });
    }
  }

  getPartyById(id: number): Party {
    let ind = this._parties$.value.findIndex((x) => x.id === id);
    return this._parties$.value[ind];
  }

  addParty(caseId: string, item: Party): Observable<Party[]> {
    this.http
      .post<Party>(this.partiesURL, { caseId, item })
      .subscribe((res) => {
        this._parties$.value.push(res);
      });
    return this._parties$ as Observable<Party[]>;
  }
  updateParty(id: number, item: Partial<Party>) {
    return this.http
      .patch<Party>(`${this.partiesURL}/${id}`, item)
      .subscribe((response) => {
        let ind = this._parties$.value.findIndex((x) => x.id === response.id);
        this._parties$.value[ind] = response;
      });
    // .pipe(
    //   catchError(this.handleError('updateParty', item))
    // );
  }
  deleteParty(id: number) {
    return this.http
      .delete<Party>(`${this.partiesURL}/${id}`)
      .subscribe((y) => {
        let ind = this._parties$.value.findIndex((x) => x.id === y.id);
        this._parties$.value.splice(ind, 1);
      });
    // .pipe(
    //   catchError(this.handleError('updateParty', id))
    // );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error("Something bad happened; please try again later.")
    );
  }
}
