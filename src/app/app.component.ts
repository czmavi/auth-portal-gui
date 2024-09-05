import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { smartTimer } from '@pstg/smart-timer';
import { PrimeNGConfig } from 'primeng/api';
import { mergeMap } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly primengConfig: PrimeNGConfig,
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    smartTimer(0, 60000, 60000).pipe(
      mergeMap(() => this.authService.isLoggedIn()),
    ).subscribe(isLoggedIn => {
      const isOnLoginScreen = this.router.url === '/auth/login';
      if (isLoggedIn) {
        if (isOnLoginScreen) {
          this.router.navigate(['/account']);
        }
      } else {
        if (!isOnLoginScreen) {
          this.router.navigate(['/auth/login']);
        }
      }
    });
  }
}
