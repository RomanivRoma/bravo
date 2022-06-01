import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { InputsModule } from 'src/app/shared/components/inputs/inputs.module';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsModule } from 'src/app/shared/components/buttons/buttons.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { CodeCardComponent } from './components/code-card/code-card.component';
import { SpinnerComponent } from 'src/app/core/components/spinner/spinner.component';
import { ComponentsModule } from 'src/app/core/components/components.module';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    LoginCardComponent,
    CodeCardComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    InputsModule,
    LogoModule,
    ButtonsModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],      
  exports: [
    RouterModule,
  ]
})
export class AuthModule { }
