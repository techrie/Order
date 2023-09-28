import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/Menu.model';
import { MenuselectService } from 'src/app/menuselect.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizzamenu!: Menu[];    

  constructor(private menuService: MenuselectService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.pizzamenu = this.menuService.getPizza();
  }

  sendToCart(menu: Menu){
    /* this.menuService.menuSelected.emit(menu);
    console.log(menu); */
    this.menuService.addItemsToCart(menu);
   // this.router.navigate('../cart', {relativeTo: this.route});
  }

}
