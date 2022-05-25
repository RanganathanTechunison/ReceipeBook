import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { receipesComponent } from './Receipes/receipes.component';
import { HeadersComponent } from './headers/headers.component';
import { ReceipeListComponent } from './Receipes/receipe-list/receipe-list.component';
import { ReceipeDetailComponent } from './Receipes/receipe-detail/receipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ReceipeItemComponent } from './Receipes/receipe-list/receipe-item/receipe-item.component';


@NgModule({
  declarations: [
    AppComponent,
    receipesComponent,
    HeadersComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    ReceipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
   

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
