import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultsService } from '../../InvestmentResults.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment?:number;
  annualInvestment?:number;
  expectedReturn?:number;
  duration?:number;

  constructor(private investmentResultsService:InvestmentResultsService){}
onSubmit(){
 this.investmentResultsService.calculateInvestmentResults(this.initialInvestment!,this.annualInvestment!,this.expectedReturn!,this.duration!);
}
}
