import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from  '@angular/router';

import {RestaurantsService} from '../restaurants/restaurants.service';
import {Restaurant} from '../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant:Restaurant;

  constructor(private restaurantService:RestaurantsService,private router:ActivatedRoute) { 
  
  }

  ngOnInit() {
    this.restaurantService.restaurantById(this.router.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant);
  }

}
