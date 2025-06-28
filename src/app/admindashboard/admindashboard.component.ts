import { Component } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {
  selectedTab: string = 'update'; // Default to 'update' or any other tab except 'home'

  selectTab(tab: string) {
    if (tab !== 'home') {
      this.selectedTab = tab;
    }
  }
}
