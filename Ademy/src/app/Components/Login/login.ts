import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  username = '';
  password = '';
  showPassword = false;
  remember = false;
  loading = false;
  error = '';
  success = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    this.error = '';

    if (!this.username.trim() || !this.password.trim()) {
      this.error = 'Por favor ingresá tu usuario y contraseña.';
      return;
    }

    this.loading = true;

    // Simulación de autenticación — reemplazar con servicio real
    setTimeout(() => {
      this.loading = false;
      if (this.username === 'admin' && this.password === '1234') {
        this.success = true;
      } else {
        this.error = 'Usuario o contraseña incorrectos.';
      }
    }, 1300);
  }
}
