import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PizzaComponent } from './menu/pizza/pizza.component';
import { SaladComponent } from './menu/salad/salad.component';
import { StarterComponent } from './menu/starter/starter.component';
import { CartComponent } from './cart/cart.component';
import { ContactSubmitComponent } from './contact-submit/contact-submit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
    {path:'' , redirectTo: '/home', pathMatch:'full'},
    {path:'home', component: HomeComponent },
    {path:'menu', component: MenuComponent, children: [
        {path: '', redirectTo: '/menu/pizza', pathMatch: 'full'},
        {path: 'pizza', component: PizzaComponent, children:[
            {path: ':id',component:PizzaComponent}
        ]},
        {path: 'salad', component: SaladComponent, children:[
            {path: ':id',component:PizzaComponent}
        ]},
        {path: 'starter', component: StarterComponent, children:[
            {path: ':id',component:PizzaComponent}
        ]}
    ]}, 
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'cart', component: CartComponent},
    { path: 'contact/contactSubmit', component: ContactSubmitComponent},
    { path: 'not-found', component: PageNotFoundComponent},	
    { path: '**', redirectTo: '/not-found'}  
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule],
})
export class AppRoutingModule {

}
    