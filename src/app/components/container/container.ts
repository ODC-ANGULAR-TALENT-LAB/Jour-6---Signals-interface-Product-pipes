import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Productlist } from '../productlist/productlist';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [RouterOutlet, Productlist],
  templateUrl: './container.html',
  styleUrls: ['./container.css'],
})
export class Container {
}
