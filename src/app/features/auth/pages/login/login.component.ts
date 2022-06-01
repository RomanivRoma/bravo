import { Component, OnInit } from '@angular/core';

const emails: string[] = [
  'roma@gmail.com'
];

@Component({
  selector: 'bravo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public isLogged: boolean = false;

  constructor() {}
  ngOnInit(): void {}

  submitEmail(isLogged: boolean) {
    if(isLogged){
      this.isLogged = true;
    }
  }
}
