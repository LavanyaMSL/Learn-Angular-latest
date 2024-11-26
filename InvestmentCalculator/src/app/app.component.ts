import { Component } from '@angular/core';
import { HeaderComponent } from './header/header/header.component';
import { UserInputComponent } from './userInput/user-input/user-input.component';
import { ResultsComponent } from './InvestmentResults/results/results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[HeaderComponent,UserInputComponent,ResultsComponent],
  templateUrl: './app.component.html',
  styleUrl:'./app.component.css'
})
export class AppComponent {}
