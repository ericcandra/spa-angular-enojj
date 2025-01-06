import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('authToken');

    if (token) {
      // Token exists, allow access
      return true;
    } else {
      // Token does not exist, redirect to login
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
