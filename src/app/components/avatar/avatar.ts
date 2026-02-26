import { CommonModule } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
})
export class AvatarComponent {
  // Propiedades
  colorFondo: WritableSignal<string> = signal<string>('#3498db');
  tamanho: WritableSignal<number> = signal<number>(150);
  tienelentes: WritableSignal<boolean> = signal<boolean>(false);
  tipoExpression: WritableSignal<number> = signal<number>(1);


  cambiarColor(event: Event): void {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    this.colorFondo.set(input.value);
  }

  cambiarTamaño(event: Event): void {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    this.tamanho.set(parseInt(input.value));
  }

  toggleLentes(): void {
    this.tienelentes.update(flag => !flag);
  }

  setExpression(tipo: number): void {
    this.tipoExpression.set(tipo);
  }
}