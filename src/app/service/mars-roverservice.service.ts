import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarsPhoto } from '../model/MarsPhoto.model';
import { MarsRoverResponse } from '../model/marsRoverResponse';

@Injectable({
  providedIn: 'root'
})
export class MarsRoverserviceService {

  private baseUrl = "http://localhost:8080";
  private readonly APICont = "/api/photos/marsrover/?";
  private date:String = "date="
  private camera:String = "&camera="
  private marsSol:String = "&marsSol="
  private page:String = "&page="
  private roboMars = "&robomars="

  constructor(
    private http:HttpClient
  ) { }

  findByDateBaseMars(date:Observable<MarsPhoto[]>){  
    console.log(date)
  }

}

