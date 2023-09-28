import { Injectable } from '@angular/core';
import { Cart } from './cart.model';
import { EventEmitter } from '@angular/core'; 

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  
  cartItemsChanged = new EventEmitter<Cart[]>();
    cartItems: Cart[] = [
/*          new Cart('Pizza', 12.00) 
 */      ];

    getCartItems() {
      return this.cartItems.slice(); 
    }
    getCartItemsLength() {
      return this.cartItems.length; 
    }
    addItemToCart(cartItem: Cart) {
      if(this.cartItems.indexOf(cartItem)==-1){
        this.cartItems.push(cartItem);      
        this.cartItemsChanged.emit(this.cartItems.slice()); 
        console.log(this.cartItems);
      }  
    }

    deleteCartItem(index: number) {
      this.cartItems.splice(index,1);
      this.cartItemsChanged.emit(this.cartItems.slice()); 
    }
    
getSum() {
  console.log("HellOO");
  var sum = this.cartItems.map(i => i.price).reduce((a,b) => a+b,0);
  /* console.log(sum); */ 
  return sum;
  /* 
  console.log("HellOO");
   for (let i = 0; i < this.cartItems.length; i++) {
    var total = total + this.cartItems[i].price; */
  } 
}
