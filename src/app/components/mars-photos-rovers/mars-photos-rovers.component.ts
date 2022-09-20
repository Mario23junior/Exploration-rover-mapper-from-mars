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
[x: string]: any;

  public form: FormGroup
  public data: MarsRoverResponse[] = []
  public marsCam: MarsPhoto[] = []

  constructor(
    public formBuild: FormBuilder,
    public service: MarsRoverserviceService

  ) {
    this.form = this.formBuild.group({
      robomars: ['curiosity'],
      cameras: ['fhaz'],
      date: ['2012-11-18'],
      solMars: [563],
    })
  }

  ConsultForDatePhoto() {
    let roboRovesr = this.form.value.robomars
    let data = this.form.value.date
    let MarsCameras = this.form.value.cameras
    let solMars = this.form.value.solMars
  
    this.service.findByDateBaseMars(roboRovesr, data, MarsCameras, solMars)
      .subscribe(data => {
        this.data = data
        console.log(data)
       })
  }



  ngOnInit(): void {
  }

}
