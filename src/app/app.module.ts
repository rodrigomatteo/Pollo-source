import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './helpers/fake-backend';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';

import { MessageService } from './services/message.service';
import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticateService } from './services/authenticate.service';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { QuotesComponent } from './quotes/quotes.component';
import { SalesComponent } from './sales/sales.component';
import { HeaderComponent } from './header/header.component';
import { ConfigComponent } from './config/config.component';
import { ProfileComponent } from './profile/profile.component';
import { BillingComponent } from './billing/billing.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    routing 
    ],
  declarations: [ 
    AppComponent, 
    MessageComponent, 
    LoginComponent, 
    RegisterComponent, 
    HomeComponent, 
    SidebarComponent, 
    QuotesComponent, 
    SalesComponent, 
    HeaderComponent, 
    ConfigComponent, ProfileComponent, BillingComponent 
    ],
  bootstrap: [ AppComponent ],
  providers: [
    MessageService, 
    AuthenticateService,
    // provider used to create fake backend
    fakeBackendProvider
    ],
})
export class AppModule { }
