import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  public form: FormGroup

  constructor(
    public formBuild: FormBuilder
  ) {
    this.form = this.formBuild.group({
      curiosity: [null],
      opportunity: [null],
      spirit: [null],
      fhaz: [null],
      mast: [null],
      chemcam: [null],
      hazcam: [null],
      mardi: [null],
      mahli: [null],
      navcam: [null],
      minites: [null],
      solMars:[null]


    })
  }


  ngOnInit(): void {
  }

  ConsultForDatePhoto() {
    console.log(this.form.value)
  }


}
