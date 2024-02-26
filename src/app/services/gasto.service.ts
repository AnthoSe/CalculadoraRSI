import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gasto } from '../models/gasto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GastoService {
  private registerURL = 'http://localhost:3000/api-gasto/registro';
  private URL_API = 'http://localhost:3000/api-gasto/';
  constructor(private http: HttpClient){}

  addGasto(gasto: Gasto):  Observable<any>{
    return this.http.post(this.registerURL,gasto);
  }
  deleteGasto(reportId: string): Observable<Gasto[]> {
    return this.http.delete<Gasto[]>(`${this.URL_API}/delete/${reportId}`);
  }
  

}
