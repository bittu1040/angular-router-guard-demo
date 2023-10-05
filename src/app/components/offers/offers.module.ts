import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers.component';
import { OffersRoutingModule } from './offers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OffersRoutingModule
  ]
})
export class OffersModule { }