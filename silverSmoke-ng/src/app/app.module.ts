import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {ProductComponent} from "./components/Product/product.component";
import {AppRoutingModule} from "./app-routing.module";
import {ProductService} from "./service/product.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatCheckboxModule,
        MatIconModule,
        AppRoutingModule,
        HttpClientModule,
    ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
