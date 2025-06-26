import { Component } from '@angular/core';

@Component({
  selector: 'app-vaccinehistory',
  templateUrl: './vaccinehistory.component.html',
  styleUrls: ['./vaccinehistory.component.css']
})
export class VaccinehistoryComponent {

vaccinationData = [
    { uname: 'prakash',     name: 'Covaxin', date: '2025-06-01', status: 'Taken', certificate:'download certificate' },
    { uname: 'hemant', name: 'Covishield', date: '2025-06-15', status: 'Remaining', certificate:'download certificate' },
    { uname: 'parteek', name: 'Sputnik', date: '2025-05-20', status: 'Deleted' , certificate:'download certificate'},
     { uname: 'sahil', name: 'Covax', date: '2025-06-01', status: 'Taken' , certificate:'download certificate'},
    { uname: 'prasanjeet', name: 'Covis', date: '2025-06-15', status: 'Taken' , certificate:'download certificate'},
    { uname: 'shruti', name: 'Sputnik', date: '2025-05-20', status: 'Deleted', certificate:'download certificate' } ];

currentIndex = 0;

nextPage() {
  if (this.currentIndex + 5 < this.vaccinationData.length) {
    this.currentIndex += 5;
  }
}

prevPage() {
  if (this.currentIndex - 5 >= 0) {
    this.currentIndex -= 5;
  }
}

}