import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  login(username: string, password: string): boolean {
    // votre backend pour vérifier les informations d'identification
    // Si les informations d'identification sont valides,  définir loggedIn sur true
    // Sinon, à false

    // Verif basique
    if (username === 'admin' && password === 'password') {
      this.loggedIn = true;
      return true;
    }

    return false;
  }

  logout(): void {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
