import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesListComponent } from './quotes/list/quotes-list.component';
import { SalesComponent } from './sales/sales.component';
import { SalesListComponent } from './sales/list/sales-list.component';
import { ConfigComponent } from './config/config.component';
import { BillingComponent } from './billing/billing.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guard/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'quotes', component: QuotesListComponent, canActivate: [AuthGuard] },
    { path: 'quotes/list', component: QuotesListComponent, canActivate: [AuthGuard] },
    { path: 'quotes/new', component: QuotesComponent, canActivate: [AuthGuard] },
    { path: 'quotes/view/:id', component: QuotesComponent, canActivate: [AuthGuard] },
    { path: 'sales', component: SalesListComponent, canActivate: [AuthGuard] },
    { path: 'sales/list', component: SalesListComponent, canActivate: [AuthGuard]},
    { path: 'sales/new', component: SalesComponent, canActivate: [AuthGuard] },
    { path: 'sales/view/:id', component: SalesComponent, canActivate: [AuthGuard] },
   { path: 'config', component: ConfigComponent, canActivate: [AuthGuard] },
    { path: 'billing', component: BillingComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);