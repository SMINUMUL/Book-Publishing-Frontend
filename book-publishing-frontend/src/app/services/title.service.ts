import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TitleModel } from '../models/title-model';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private apiUrl = 'http://localhost:8090/api';

  constructor(private http: HttpClient) { }

  getTitles(): Observable<TitleModel[]> {
    return this.http.get<TitleModel[]>(`${this.apiUrl}/titles`);
  }
}
