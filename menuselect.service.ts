/* import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuselectService {

  constructor() { }
} */

import { Menu } from './Menu.model';
import { EventEmitter, Injectable } from '@angular/core';
import { CartsService } from './carts.service';


@Injectable({
  providedIn: 'root'
})
export class MenuselectService {
    menuSelected = new EventEmitter<Menu>();

    private pizzamenu: Menu[] = [
        new Menu('Margherita','Fresh tomatoes, fresh mozzarella, fresh basil',12.50),
        new Menu('Formaggio','Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)',15.50),
        new Menu('Chicken','Fresh tomatoes, mozzarella, chicken, onions',17.00),
        new Menu("Pineapple'o'clock",'Fresh tomatoes, fresh mozzarella, fresh basil',16.50),
        new Menu('Meat Town Hot!','Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken',20.00),
        new Menu('Parma New','Fresh tomatoes, mozzarella, parma, bacon, fresh arugula',21.50)
      ]; 

    private saladmenu: Menu[] = [
        new Menu('Lasagna','Special sauce, mozzarella, parmesan, ground beef', 12.50),
        new Menu('Ravioli','Ravioli filled with cheese',15.50),
        new Menu('Spaghetti Classica','Fresh tomatoes, onions, ground beef',17.00),
        new Menu("Seafood pasta",'Salmon, shrimp, lobster, garlic',16.50)
      ]; 

    private startermenu: Menu[] = [
        new Menu('Todays Soup Seasonal','Ask the waiter', 5.50),
        new Menu('Bruschetta','Bread with pesto, tomatoes, onion, garlic',8.50),
        new Menu('Garlic bread','Grilled ciabatta, garlic butter, onions', 9.50),
        new Menu("Tomozzarella",'Tomatoes and mozzarella', 10.50)
      ]; 

      constructor(private cartService: CartsService) {}

      getPizza() {
        return this.pizzamenu.slice();
      }

      getSalad() {
        return this.saladmenu.slice();
      }

      getStarter() {
        return this.startermenu.slice();
      }

      addItemsToCart(menu: Menu) {
        this.cartService.addItemToCart(menu);
      }
 
      /* getPizzaItem(index:number) {
        return this.pizzamenu[index];
      } */
/* 
      addItemToCart(index: number){
        return this.pizzamenu.slice[index];
      } */

      
}