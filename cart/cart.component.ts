import { Component, OnInit, Input, Output } from '@angular/core';
import { Cart } from '../cart.model';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [
    new Cart('Pizza',12.00),
   ];  
  sum = 0;
constructor(private cartService: CartsService) {}

ngOnInit() {
this.cartItems = this.cartService.getCartItems();
this.cartService.cartItemsChanged.subscribe(
  (cartItems: Cart[]) => {
    this.cartItems= cartItems;    
  })
  this.sum = this.cartService.getSum();
  
console.log(this.sum);
console.log("---");
}

updatePrice(index: number, price: number) {
  console.log(index);
  this.cartService.cartItems[index].price = price;
  this.sum = this.cartService.getSum();
  console.log(this.cartItems);
}
updatePriceAfterDelete(index: number) {
  console.log(index);
  //delete this.cartService.cartItems[index];
  this.cartService.deleteCartItem(index);
  this.sum = this.cartService.getSum();
  console.log(this.cartItems);
}

  /* 
   item: Menu;
   id:number;
    constructor(private menuService: MenuselectService,
        private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.item = this.menuService.getPizzaItem(this.id);
        console.log(this.item);
      }
    )
  }
 */
}
