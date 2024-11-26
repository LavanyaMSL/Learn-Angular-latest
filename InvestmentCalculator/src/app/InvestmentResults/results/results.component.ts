import { Component, Input } from '@angular/core';
import { inputData, InvestmentData } from '../../investmentData.model';
import { InvestmentResultsService } from '../../InvestmentResults.service';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
constructor(private investmentResultsService:InvestmentResultsService){}

get investResults(){
  return this.investmentResultsService.getInvestmentResults();

}
}
