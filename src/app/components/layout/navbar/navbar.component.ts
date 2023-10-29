import { AutenticationHelper } from 'src/app/helper/autentication.helper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isSignedIn: boolean = false

  constructor(private autenticationHelper: AutenticationHelper) {}

  ngOnInit(): void {
    this.isSignedIn = this.autenticationHelper.isSignedIn()
  }

}
