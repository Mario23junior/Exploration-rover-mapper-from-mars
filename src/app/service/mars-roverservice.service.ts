import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { MarsPhoto } from '../model/MarsPhoto.model';
import { MarsRoverResponse } from '../model/marsRoverResponse';

@Injectable({
  providedIn: 'root'
})
export class MarsRoverserviceService {

  private baseUrl = "http://localhost:8080";
  private readonly APICont = "/api/photos/marsrover/?";
  private date: String = "date="
  private camera: String = "&camera="
  private marsSol: String = "&marsSol="
  private page: String = "&page="
  private roboMars = "&robomars="

  constructor(
    private http: HttpClient
  ) { }

  findByDateBaseMars(
    roboRovesr: Observable<MarsRoverResponse[]>,
    data: Observable<MarsRoverResponse[]>,
    marsCameras: Observable<MarsRoverResponse[]>,
    solMars: Observable<MarsRoverResponse[]>
  ) {

    let convert = JSON.stringify(data)
    let dataConvert = convert.slice(0, 11)
    let dataResp = new Date(dataConvert);
    let dataFormt = (dataResp.getFullYear() + "-" + ((dataResp.getMonth() + 1)) + "-" + (dataResp.getDate()));


    let urlCenter = (this.baseUrl + this.APICont + this.date + dataFormt + this.camera +
      marsCameras + this.marsSol + solMars + this.page + 1 + this.roboMars + roboRovesr)

    console.log(urlCenter)

    let request = this.http.get<MarsRoverResponse[]>(urlCenter)
    console.log(request)


    return request
      .pipe(
        catchError(error => {
          return ([])
        })
      )

  }

}

