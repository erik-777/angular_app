import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, UserComponent],
  template:`<h1>Hola mundo</h1>
  <app-user/>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_app';
}
