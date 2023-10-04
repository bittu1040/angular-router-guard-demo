import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DataService } from './services/data.service';
import { ProductsComponent } from './components/products/products.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { EditAboutComponent } from './components/edit-about/edit-about.component';
import { RoleGuard } from './services/role.guard';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    AccessDeniedComponent,
    NotFoundComponent,
    AboutComponent,
    EditAboutComponent,
    AdminComponent,
  ],
  providers: [DataService, RoleGuard, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
