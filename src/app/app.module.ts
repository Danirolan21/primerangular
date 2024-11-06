import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeportesComponent } from '../components/deportes/deportes.component';
import { FormsbindingComponent } from '../components/formsbinding/formsbinding.component';
import { SumarnumerosComponent } from '../components/sumarnumeros/sumarnumeros.component';
import { TablamultiplicarComponent } from '../components/tablamultiplicar/tablamultiplicar.component';

@NgModule({
  declarations: [
    AppComponent,
    DeportesComponent,
    FormsbindingComponent,
    SumarnumerosComponent,
    TablamultiplicarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
