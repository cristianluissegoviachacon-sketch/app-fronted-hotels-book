import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {DpDatePickerModule} from 'ng2-date-picker';
import { Hotel } from '../../../interface/hotel';
import { HotelsService } from '../../../services/hotels.service';
import { HotelListingComponent } from '../hotel-listing/hotel-listing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DpDatePickerModule,
    ReactiveFormsModule,
    HotelListingComponent,
    HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  datePickerConfig = {
    format: 'YYYY-MM-DD'
  };

  hotels: Hotel[] = [];
  hotelForm: FormGroup;

  constructor(private hotelService: HotelsService,
              private fb: FormBuilder) {
      
      this.hotelForm = this.fb.group({
        startDate: [''],
        endDate: [''],
        cityName: ['']
      });
  }

  loadHotels(): void {
    
    const { startDate, endDate, cityName } = this.hotelForm.value;

    this.hotelService.getHotels(startDate, endDate, cityName).subscribe((data:any) => {
      this.hotels = data;
      console.log(this.hotels);
    });
  }

}
