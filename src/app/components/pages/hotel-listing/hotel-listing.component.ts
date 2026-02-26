import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-listing',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './hotel-listing.component.html',
  styleUrl: './hotel-listing.component.scss'
})
export class HotelListingComponent {

  @Input() hotels: any[] = [];

}
