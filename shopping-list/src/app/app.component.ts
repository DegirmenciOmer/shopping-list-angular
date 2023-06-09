import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shopping-list';
  loadedFeature = 'recipe';
  onNavigate(feat: string) {
    this.loadedFeature = feat;
  }
}
