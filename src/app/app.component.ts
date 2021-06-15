import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array = [1, 2, 3, 4];
  
  tabs = [
    {
      name: 'Inicio',
      icon: 'bi bi-house-door-fill'
    },
    {
      name: 'Cursos y horarios',
      icon: 'bi bi-bookmark-heart-fill'
    },
    {
      name: 'Sobre mi',
      icon: 'bi bi-person-badge-fill'
    },
    {
      name: 'Métodos de pago ',
      icon: 'bi bi-credit-card-fill'
    }
  ];

}
