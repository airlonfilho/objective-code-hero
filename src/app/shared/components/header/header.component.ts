import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  candidateName: string = 'Airlon Filho';
  logoImage: string = './../../../../assets/images/logo-objective.svg';

  getInitials(name: string): string {
    return name.split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('');
  }
}
