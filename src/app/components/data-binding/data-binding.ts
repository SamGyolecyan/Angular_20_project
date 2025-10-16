import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss'
})
export class DataBinding {

  courseName: string = "Angular 20"

  width: string = 'width: 20px'

  height: string = 'height: 30px'

  IdNumber: number = 45

  duration: string = 'Hello world'

  currentDate: Date = new Date()

  constructor() {}

}
