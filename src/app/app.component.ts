import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _router: Router){

  }

  ngOnInit(): void {
    console.log("Navigating to home");
    this._router.navigate(['home']);
  }


  title = 'LearningTimeVR';


}
