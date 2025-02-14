import { Component } from '@angular/core';
import { GithubService, Contribution } from './services/github.service';
import { UserQuery } from './components/user-input/user-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contributions: Contribution[] = [];
  errorMessage: string = '';
  loading: boolean = false;
  darkMode: boolean = false;

  constructor(private githubService: GithubService) {}

  onQuerySubmitted(query: UserQuery): void {
    this.loading = true;
    this.errorMessage = '';
    this.githubService.getContributions(query.username, query.days).subscribe({
      next: (data) => {
        this.contributions = data;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Error fetching contributions. Please try again.';
        this.loading = false;
      }
    });
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
  }
}
