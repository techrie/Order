import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { Cart } from 'src/app/cart.model';
import { NgForm } from '@angular/forms';
import { CartsService } from 'src/app/carts.service';

@Component({
  selector: 'app-cart-edit',
  templateUrl: './cart-edit.component.html',
  styleUrls: ['./cart-edit.component.css']
})
export class CartEditComponent implements OnInit {
@Input() cart!: Cart;
@Input() ind!: number;
@ViewChild('f',{static: false}) pizzaForm!: NgForm;
@Output() priceUpdated = new EventEmitter<number>();
@Output() priceUpdatedAfterDel = new EventEmitter<number>();
defaultNumber = 1;
baseprice = 0;
id!: number;

constructor(private cartService: CartsService) { }

ngOnInit() {
  console.log(this.cart.name);
  this.baseprice = this.cart.price;
}

onChangeQty(event: any) {
  this.cart.price = this.baseprice * event.target.value;
  this.priceUpdated.emit(this.cart.price);
}   

onDeleteItem() {
  console.log(this.ind);
  //this.cartService.deleteCartItem(this.ind);
  //delete this.cartService.cartItems[this.id];
  this.priceUpdatedAfterDel.emit(this.ind);
}



}
