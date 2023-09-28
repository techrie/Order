import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/Menu.model';
import { MenuselectService } from 'src/app/menuselect.service';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.css']
})
export class SaladComponent implements OnInit {
  saladmenu!: Menu[]; 
  constructor(private menuService: MenuselectService) { }

  ngOnInit() {
    this.saladmenu = this.menuService.getSalad();
  }
  sendToCart(menu: Menu){
    this.menuService.addItemsToCart(menu);
  }

}
