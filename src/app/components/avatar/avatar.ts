import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss'
})
export class AvatarComponent {

  colorFondo = signal<string>('#3498db');
  tamano = signal<number>(150);
  tieneLentes = signal<boolean>(false);
  tipoExpresion = signal<number>(1);
  nombre = signal<string>('');

  
  girando = signal<boolean>(false);

  cambiarColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.colorFondo.set(input.value);
  }

  cambiarTamano(event: Event) {
    const input = event.target as HTMLInputElement;
    this.tamano.set(Number(input.value));
  }

  toggleLentes() {
    this.tieneLentes.update(v => !v);
  }

  setExpresion(tipo: number) {
    this.tipoExpresion.set(tipo);
  }

  toggleGiro() {
    this.girando.update(v => !v);
  }
}