import { ApiService } from '../../api.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  animalTriviaQuestion: string;
  animalTriviaAnswer: string;
  constructor(
    private apiSevice: ApiService,
    private cookieService: CookieService,
    private router: Router) {}
  ngOnInit(): void {
    const petappToken = this.cookieService.get('petapp-token');
    if(!petappToken) {
      this.router.navigate(['/auth/login']);
    }
    this.getAnotherTrivia();
  }
  getAnotherTrivia(): void {
    this.apiSevice.getFacts().subscribe(
      result => {
        // atob converts base64 encoding to utf-8
        this.animalTriviaQuestion = atob(result['results'][0]['question']);
        this.animalTriviaAnswer = atob(result['results'][0]['correct_answer']);
      }
    )
  }
}