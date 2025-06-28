import { Component, OnInit } from '@angular/core';
import { ViewFamilyBookingService, FamilyMember } from '../services/view-family-booking.service';
import { HttpClient } from '@angular/common/http';

interface SlotApiResponse {
  slotId: number;
  vaccineName: string;
  locationCity: string;
  locationState: string;
  locationCountry: string;
  slotDate: string;
  availableCount: number;
  vaccinationCenterName: string;
}

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {
  userBookings = [
    { name: 'Alice', vaccine: 'Covaxin', date: '2025-06-25', time: '09:00 AM', location: 'Chennai' }
  ];
  familyBookings: any[] = [];
  userId: number = 1; // Replace with actual userId from auth context if available
  slots: SlotApiResponse[] = [];

  // Reschedule modal state
  showRescheduleModal = false;
  selectedBooking: any = null;
  selectedBookingType: 'user' | 'family' | null = null;
  selectedBookingIndex: number | null = null;
  selectedSlotId: number | null = null;

  constructor(private viewFamilyBookingService: ViewFamilyBookingService, private http: HttpClient) {}

  ngOnInit() {
    this.fetchSlotsAndBookings();
  }

  fetchSlotsAndBookings() {
    this.http.get('https://f1h42csw-5136.inc1.devtunnels.ms/api/Slot/available', { responseType: 'text' })
      .subscribe({
        next: (res: string) => {
          try {
            this.slots = JSON.parse(res);
          } catch (e) {
            this.slots = [];
          }
          this.getFamilyBookings();
        },
        error: () => {
          this.slots = [];
          this.getFamilyBookings();
        }
      });
  }

  getFamilyBookings() {
    this.viewFamilyBookingService.getFamilyMembers(this.userId).subscribe({
      next: (data: any[]) => {
        // Map slot details into each family booking
        this.familyBookings = data.map(fb => {
          const slot = this.slots.find(s => s.slotId === fb.slotId);
          return {
            ...fb,
            vaccineName: slot ? slot.vaccineName : '',
            slotDate: slot ? slot.slotDate : '',
            vaccinationCenterName: slot ? slot.vaccinationCenterName : '',
            locationState: slot ? slot.locationState : '',
            locationCity: slot ? slot.locationCity : ''
          };
        });
      },
      error: (err) => {
        alert('Failed to fetch family bookings.');
      }
    });
  }

  deleteUserBooking(index: number) {
    this.userBookings.splice(index, 1);
  }

  deleteFamilyBooking(index: number) {
    const memberId = this.familyBookings[index].memberId;
    const name = this.familyBookings[index].fullName;
    this.viewFamilyBookingService.deleteFamilyMember(memberId).subscribe({
      next: () => {
        this.familyBookings.splice(index, 1);
        alert(`Family booking for ${name} deleted successfully.`);
      },
      error: () => {
        alert('Failed to delete family booking.');
      }
    });
  }

  openRescheduleModal(booking: any, type: 'user' | 'family', index: number) {
    this.selectedBooking = booking;
    this.selectedBookingType = type;
    this.selectedBookingIndex = index;
    this.selectedSlotId = null;
    this.showRescheduleModal = true;
  }

  closeRescheduleModal() {
    this.showRescheduleModal = false;
    this.selectedBooking = null;
    this.selectedBookingType = null;
    this.selectedBookingIndex = null;
    this.selectedSlotId = null;
  }

  submitReschedule() {
    if (!this.selectedSlotId || this.selectedBookingIndex === null || !this.selectedBookingType) return;

    if (this.selectedBookingType === 'user') {
      // For demo: just update the slot in the local array
      const slot = this.slots.find(s => s.slotId == this.selectedSlotId);
      if (slot) {
        this.userBookings[this.selectedBookingIndex] = {
          ...this.userBookings[this.selectedBookingIndex],
          vaccine: slot.vaccineName,
          date: slot.slotDate,
          location: slot.locationCity
        };
      }
      this.closeRescheduleModal();
      alert('User booking rescheduled!');
    } else if (this.selectedBookingType === 'family') {
      // For demo: update slot in local array, in real app call backend API
      const slot = this.slots.find(s => s.slotId == this.selectedSlotId);
      if (slot) {
        this.familyBookings[this.selectedBookingIndex] = {
          ...this.familyBookings[this.selectedBookingIndex],
          slotId: slot.slotId,
          vaccineName: slot.vaccineName,
          slotDate: slot.slotDate,
          vaccinationCenterName: slot.vaccinationCenterName,
          locationState: slot.locationState,
          locationCity: slot.locationCity
        };
      }
      this.closeRescheduleModal();
      alert('Family booking rescheduled!');
    }
  }
}
