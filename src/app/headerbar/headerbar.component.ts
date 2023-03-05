import { Component } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.scss']
})
export class HeaderbarComponent {
  constructor(public authService: AuthService){

  }

  
}
