import { Component, OnInit } from '@angular/core';

import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { BreakpointObserver } from '@angular/cdk/layout';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',

  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,

    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],

  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  sidenavMode: 'side' | 'over' = 'side';

  sidenavOpened = true;


  constructor(
    private breakpointObserver: BreakpointObserver
  ) {}


  ngOnInit(): void {

    this.breakpointObserver
      .observe('(max-width: 900px)')
      .subscribe(result => {

        if (result.matches) {

          this.sidenavMode = 'over';
          this.sidenavOpened = false;

        } else {

          this.sidenavMode = 'side';
          this.sidenavOpened = true;

        }

      });

  }

}