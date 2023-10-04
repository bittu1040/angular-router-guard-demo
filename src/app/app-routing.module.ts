import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuard } from './services/auth.guard';
import { ResolveGuard } from './services/resolve.guard';
import { RoleGuard } from './services/role.guard';
import { AdminComponent } from './components/admin/admin.component';
import { EditAboutComponent } from './components/edit-about/edit-about.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotCompleteGuard } from './services/not-completed.guard';
import { ModuleGuard } from './services/module.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    component: ProductsComponent,
    resolve: { data: ResolveGuard },
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivateChild: [RoleGuard],
    children: [{ path: 'edit', component: EditAboutComponent }],
  },
  {
    path: 'contact',
    component: ContactComponent,
    canDeactivate: [NotCompleteGuard]
  },
  {
    path: 'offers',
    canLoad: [ModuleGuard],
    loadChildren: () =>
      import('./components/offers/offers.module').then((m) => m.OffersModule),
  },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}