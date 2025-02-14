import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Contribution {
  date: string;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {}

  /**
   * Simulate fetching contribution data for a user.
   * you’d replace this with a call to GitHub’s GraphQL API.
   * @param username 
   * @param days 
   */
  getContributions(username: string, days: number = 30): Observable<Contribution[]> {
    const dummyData: Contribution[] = this.generateDummyContributions(days);
    
    return of(dummyData).pipe(delay(1000));
  }

  private generateDummyContributions(days: number): Contribution[] {
    const contributions: Contribution[] = [];
    for (let i = 0; i < days; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      contributions.push({
        date: date.toISOString().split('T')[0],
        count: Math.floor(Math.random() * 10)
      });
    }
    return contributions;
  }
}
