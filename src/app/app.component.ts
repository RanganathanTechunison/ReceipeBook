import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Receipebook';
  loadedFeatures='receipe';
  onNavigate(feature:string){
this.loadedFeatures=feature;
  }
}
