import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApodResponse } from '../models/apod.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private apiKey = environment.apiKey;
  private apiUrl = 'https://api.nasa.gov/planetary/apod';

  constructor(public http: HttpClient) { }

  getImageOfTheDay(): Observable<ApodResponse> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}`;
    return this.http.get(url) as Observable<ApodResponse>
  }
}
