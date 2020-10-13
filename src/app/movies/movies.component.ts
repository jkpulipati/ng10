import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies = [1,
    
    
    2, 3, 4, 5, 6, 7, 8, 9];

        constructor() { }

  ngOnInit(): void {


  }

}
