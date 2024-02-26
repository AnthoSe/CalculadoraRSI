import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reporte } from '../models/reporte';

@Injectable({
  providedIn: 'root',
})
export class ReporteService {
  private URL_API = 'http://localhost:3000/api-gasto'; // Mantén esta URL si tu backend escucha en /api-gasto

  constructor(private http: HttpClient) {}

  getReporte(): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(`${this.URL_API}/getAllGastos`);
  }

  getReporteById(_id: string): Observable<Reporte> {
    return this.http.get<Reporte>(`${this.URL_API}/${_id}`);
  }

  getAllReporte(): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(`${this.URL_API}/getAllReporte`);
  }

  postReporte(reporte: Reporte): Observable<any> {
    return this.http.post(`${this.URL_API}/registro`, reporte);
  }

  putReporte(reporteId: string, data: any): Observable<any> {
    return this.http.put(`${this.URL_API}/${reporteId}`, data);
  }

  deleteReporte(reporteId: string): Observable<Reporte[]> {
    return this.http.delete<Reporte[]>(`${this.URL_API}/deleteReporte/${reporteId}`);
  }
  
  updateReporte(reporteId: string, reporteData: any): Observable<Reporte> {
    return this.http.put<Reporte>(`${this.URL_API}/updateReporte/${reporteId}`, reporteData);
  }

  
}
