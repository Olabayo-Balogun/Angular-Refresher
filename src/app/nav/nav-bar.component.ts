import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  //It makes sense to create the html template because writing the code here raw will be a lengthy process
  templateUrl: './nav-bar.component.html',
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
      li > a.active {
        color: #f97924;
      }
    `,
  ],
})
export class NavBarComponent {}
