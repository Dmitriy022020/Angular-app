import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {CartPageComponent} from "./pages/cart-page/cart-page.component";

export const routes: Routes = [
  {path: '', title: 'Products', component: ProductPageComponent},
  {path: 'cart', title: 'Cart', component: CartPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
