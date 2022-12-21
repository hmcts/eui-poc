import { Injectable } from "@angular/core";
import { Party } from "@hmcts-data";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "../../../../../apps/eui/src/environment/environment";
import { BehaviorSubject, Observable, throwError } from "rxjs";
const BASE_PATH = environment.BASE_URL
const API_PATH = environment.API_URL

@Injectable({
  providedIn: "root",
})
export class PartyService {
  parties$ = new BehaviorSubject<Party[]>([]);
  constructor(private http:HttpClient ) {


  }
   partiesURL = `${BASE_PATH}${API_PATH}/party`
  //partiesURL = `http://localhost:4200/microsite/nfdiv/api/party`
  getParties(caseId: string) {
    let url = `${this.partiesURL}?caseId=${caseId}`
    this.parties$.next([]);
    this.http.get(url).subscribe( (res)=> {
      this.parties$.next(<Party[]>res)
    })
  }

  getPartyById(id: number): Party{
    let ind = this.parties$.value.findIndex((x) => x.id === id);
    return this.parties$.value[ind];
  }

  addParty(caseId: string, item: Party): Observable<Party[]> {
    this.http.post<Party>( this.partiesURL, {caseId, item}).subscribe(
      res => {this.parties$.value.push(res)}
    )
    return this.parties$ as Observable<Party[]>
  }
  updateParty(id: number, item: Partial<Party>) {
    return this.http.patch<Party>(`${this.partiesURL}/${id}`, item).subscribe( (response) => {
      let ind = this.parties$.value.findIndex((x) => x.id === response.id);
      this.parties$.value[ind] = response;
    })
      // .pipe(
      //   catchError(this.handleError('updateParty', item))
      // );
  }
  deleteParty(id: number) {
    return this.http.delete<Party>(`${this.partiesURL}/${id}`).subscribe( (y) => {
      let ind = this.parties$.value.findIndex((x) => x.id === y.id);
      this.parties$.value.splice(ind,1);
    })
      // .pipe(
      //   catchError(this.handleError('updateParty', id))
      // );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
