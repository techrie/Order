import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CartEditComponent } from './cart/cart-edit/cart-edit.component';
import { ContactComponent } from './contact/contact.component';
import { ContactSubmitComponent } from './contact-submit/contact-submit.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PizzaComponent } from './menu/pizza/pizza.component';
import { SaladComponent } from './menu/salad/salad.component';
import { StarterComponent } from './menu/starter/starter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CartComponent,
    CartEditComponent,
    ContactComponent,
    ContactSubmitComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    PizzaComponent,
    SaladComponent,
    StarterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
