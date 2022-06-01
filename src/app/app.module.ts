import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './features/auth/auth.module';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { ButtonsModule } from './shared/components/buttons/buttons.module';
import { ChipsModule } from './shared/components/chips/chips.module';
import { FabsModule } from './shared/components/fabs/fabs.module';
import { InputsModule } from './shared/components/inputs/inputs.module';
import { LogoModule } from './shared/components/logo/logo.module';
import { ToastModule } from './shared/components/toast/toast.module';
import { TooltipModule } from './shared/components/tooltip/tooltip.module';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './core/components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SharedModule,

    TooltipModule,
    FabsModule,
    ButtonsModule,
    ChipsModule,

    ToastModule,
    AuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
