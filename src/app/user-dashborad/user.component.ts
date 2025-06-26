import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'] // or .scss depending on what you're using
})
export class UserComponent {
    selectedTab: string = 'Home';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  
  selectedMenu = ''; // Tracks selected sidebar item

  recentData = [
    { name: 'John Doe', vaccine: 'Covaxin', date: '2025-06-20' },
    { name: 'Jane Smith', vaccine: 'Covishield', date: '2025-06-18' },
    { name: 'Rahul Jain', vaccine: 'Sputnik', date: '2025-06-17' }
  ];

  setSelectedMenu(menu: string) {
    this.selectedMenu = menu;
  }

  navigateTo(destination: string) {
    console.log('Card clicked:', destination);
  }
}