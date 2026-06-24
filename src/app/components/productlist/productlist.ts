import { Component, signal } from '@angular/core';
import { Productitem } from '../productitem/productitem';
import { Product } from '../../models/product';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [Productitem],
  templateUrl: './productlist.html',
  styleUrls: ['./productlist.css'],
})
export class Productlist {
  protected readonly products = signal<Product[]>([
    {
      name: 'Produit 1',
      image: 'assets/images/Products/product-1.jpg',
      price: '5000 Fcfa',
    },
    {
      name: 'Produit 2',
      image: 'assets/images/Products/product-2.jpeg',
      price: '6000 Fcfa',
    },
    {
      name: 'Produit 3',
      image: 'assets/images/Products/product-1.jpg',
      price: '7500 Fcfa',
    },
    {
      name: 'Produit 4',
      image: 'assets/images/Products/product-2.jpeg',
      price: '8000 Fcfa',
    },
    {
      name: 'Produit 5',
      image: 'assets/images/Products/product-1.jpg',
      price: '9500 Fcfa',
    },
    {
      name: 'Produit 6',
      image: 'assets/images/Products/product-2.jpeg',
      price: '10000 Fcfa',
    },
    {
      name: 'Produit 7',
      image: 'assets/images/Products/product-2.jpeg',
      price: '13000 Fcfa',
    },
    {
      name: 'Produit 8',
      image: 'assets/images/Products/product-2.jpeg',
      price: '15000 Fcfa',
    },
    {
      name: 'Produit 9',
      image: 'assets/images/Products/product-2.jpeg',
      price: '17000 Fcfa',
    },
  ]);
}
