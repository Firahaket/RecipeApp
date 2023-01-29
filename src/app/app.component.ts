import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  agreed = 0;
  disagreed = 0;
  constructor(private router: Router) {}
  hasRoute(route: string) {
    return this.router.url === route;
  }

  onClicked(agreed: boolean){
    if(agreed){
      this.agreed++;
    }else {
      this.disagreed++;
    }
  }
  
}
