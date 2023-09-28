import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/Menu.model';
import { MenuselectService } from 'src/app/menuselect.service';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit {
  startermenu!: Menu[]; 
  constructor(private menuService: MenuselectService) { }

  ngOnInit() {
    this.startermenu = this.menuService.getStarter();
  }

  sendToCart(menu: Menu){ 
    this.menuService.addItemsToCart(menu);
  }
}
