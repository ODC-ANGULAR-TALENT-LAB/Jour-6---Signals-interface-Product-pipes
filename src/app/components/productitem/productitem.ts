import { Component, input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-productitem',
  standalone: true,
  imports: [],
  templateUrl: './productitem.html',
  styleUrls: ['./productitem.css'],
})
export class Productitem {
  readonly product = input.required<Product>();
}
