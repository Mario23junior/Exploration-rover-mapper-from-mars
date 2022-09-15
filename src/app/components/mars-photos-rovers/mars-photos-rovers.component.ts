import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MarsPhoto } from 'src/app/model/MarsPhoto.model';
import { MarsRoverResponse } from 'src/app/model/marsRoverResponse';
import { MarsRoverserviceService } from 'src/app/service/mars-roverservice.service';

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
  public data: MarsRoverResponse[] = []

  constructor(
    public formBuild: FormBuilder,
    public service: MarsRoverserviceService

  ) {
    this.form = this.formBuild.group({
      robomars: [null],
      cameras: [null],
      date: [null],
      solMars: [null],
    })
  }

  ConsultForDatePhoto() {

    let valuesCarga = this.form.value
  
    this.service.findByDateBaseMars(valuesCarga.robomars , valuesCarga.date,valuesCarga.cameras,valuesCarga.solMars)
      .subscribe(data => {
        this.data = data
        console.log(data)
      })
  }



  ngOnInit(): void {
  }

}
