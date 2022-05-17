import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from './shared/components/buttons/buttons.module';
import { ChipsModule } from './shared/components/chips/chips.module';
import { FabsModule } from './shared/components/fabs/fabs.module';
import { InputsModule } from './shared/components/inputs/inputs.module';
import { LogoModule } from './shared/components/logo/logo.module';
import { TooltipModule } from './shared/components/tooltip/tooltip.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SharedModule,
    
    TooltipModule,
    FabsModule,
    ButtonsModule,
    ChipsModule,
    InputsModule,
    LogoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
