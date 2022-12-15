import { Injectable } from "@angular/core";
import { Party } from "@hmcts-data";
import { v4 as uuidv4 } from "uuid";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "../../../../../apps/eui/src/environment/environment";
import { catchError, Observable, throwError } from "rxjs";
const BASE_PATH = environment.BASE_URL

@Injectable({
  providedIn: "root",
})
export class PartyService {


  constructor(private http:HttpClient ) {

  }
  partiesURL = `${BASE_PATH} /party`
  parties$ = this.http.get(this.partiesURL)

  getPartyById(id: string): Observable<Party> {
    return this.http.get<Party>(`${this.partiesURL}/id/${id}`);
  }

  addParty(item: Party): Observable<Party> {
    return this.http.post<Party>( this.partiesURL, item)
  }
  updateParty(item: Party) {
    return this.http.put<Party>(this.partiesURL, item)
      // .pipe(
      //   catchError(this.handleError('updateParty', item))
      // );
  }
  deleteParty(id: string) {
    return this.http.delete<Party>(`${this.partiesURL}/id/${id}`)
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
