import { Component, OnInit } from '@angular/core';
import { Menu } from '../Menu.model';
import { MenuselectService } from '../menuselect.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 selectedMenu!: Menu;

  constructor(private menuService: MenuselectService) { }

  ngOnInit() {
    this.menuService.menuSelected
    .subscribe(
      (menu: Menu) => {
        this.selectedMenu = menu;
      }
    )
     
  }
 

}  
