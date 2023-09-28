import { Component, OnInit } from '@angular/core';
import { CartsService } from '../carts.service';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   length!: number;
   constructor(private cartService: CartsService) { }

  ngOnInit() {
    this.length = this.cartService.getCartItemsLength();
    this.cartService.cartItemsChanged.subscribe(
      () => {
        this.length = this.cartService.getCartItemsLength(); 
      }
    )
  }
}
