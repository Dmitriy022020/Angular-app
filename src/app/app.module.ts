import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './pages/product-page/components/product/product.component';
import {NgOptimizedImage, registerLocaleData} from "@angular/common";
import localeRu from "@angular/common/locales/ru"
import {HttpClientModule} from "@angular/common/http";
import {ErrorComponent} from './commonComponents/error/error.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterProductsPipe} from './pipes/filterProducts.pipe';
import {ModalComponent} from './commonComponents/modal/modal.component';
import {CreateProductComponent} from './pages/product-page/components/createProduct/createProduct.component';
import {FocusDirective} from './directives/focus.directive';
import {ProductPageComponent} from './pages/product-page/product-page.component';
import {CartPageComponent} from './pages/cart-page/cart-page.component';
import {NavigationComponent} from './commonComponents/navigation/navigation.component';
import {CartComponent} from './pages/cart-page/components/cart/cart.component';

registerLocaleData(localeRu, 'ru')

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,
    FocusDirective,
    ProductPageComponent,
    CartPageComponent,
    NavigationComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
