import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [
    FormsModule
  ],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss'
})
export class DataBinding {

  isActive: boolean = false

  courseName: string = "Angular 20"

  width: string = 'width: 20px'

  second: string = 'secondary'

  height: string = 'height: 30px'

  IdNumber: number = 45

  duration: string = 'Hello world'

  currentDate: Date = new Date()

  constructor() {
    setTimeout(() => {
      this.IdNumber = 90
    },10000)
  }

}
