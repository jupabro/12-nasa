import { Component, OnInit } from '@angular/core';
import { NasaService } from './service/nasa.service';
import { ApodResponse } from './models/apod.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nasa-quest12'

  public imgOfTheDay!: ApodResponse

  constructor(public nasaService: NasaService) { }

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe((data) => this.imgOfTheDay = data)
  }

}
