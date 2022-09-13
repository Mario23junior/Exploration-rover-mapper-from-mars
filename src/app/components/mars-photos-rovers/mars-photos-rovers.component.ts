import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mars-photos-rovers',
  templateUrl: './mars-photos-rovers.component.html',
  styleUrls: ['./mars-photos-rovers.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 3 }),
        animate(1000, style({ opacity: -400 }))
      ])
    ])
  ]
})
export class MarsPhotosRoversComponent implements OnInit {

  constructor() { }

  fontStyleControl = new FormControl('');
  fontStyle?: string;

  ngOnInit(): void {
  }

}
