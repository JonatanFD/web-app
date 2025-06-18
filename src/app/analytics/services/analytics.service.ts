import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnalyticsResponse } from './analytics.response';
import { AnalyticsData } from '../model/analytics.entity';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AnalyticsAssembler } from './analytics.assembler';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  // Cambia la URL para que apunte a la colección correcta en el backend json-server
  private apiUrl = environment.apiBaseUrl + '/customer_analytics';

  constructor(private http: HttpClient) {}

  getUserAnalytics(userId: string): Observable<AnalyticsData> {
    return this.http.get<AnalyticsResponse[]>(`${this.apiUrl}?user_id=${userId}`)
      .pipe(
        map(responses => AnalyticsAssembler.toEntity(responses[0]))
      );
  }
}
