import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultLoginLayout } from './components/default-login-layout/default-login-layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'loginpage';
}
