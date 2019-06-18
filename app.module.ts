import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from '../app/guards/auth.gaurd';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './../app/Interceptors/token_interceptor';
import { Api } from '../app/providers/api/api';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { NotifierModule } from "angular-notifier";
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


const config: SocketIoConfig = { url: 'https://parkmanagement.herokuapp.com', options: {} };

@NgModule({
  imports: [
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    FormsModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'middle'
        },
        vertical: {
          position: 'top'
        }
      }, behaviour: {
        autoHide: 2000
      }
    }),
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent

  ],
  providers: [Api, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
