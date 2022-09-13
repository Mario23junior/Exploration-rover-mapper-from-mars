import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarsRoverserviceService {

  private baseUrl = "http://localhost:8080";
  private readonly APICont = "/api/photos/marsrover/?";
  private date:String = "date="
  private camera:string = "&camera="
  private marsSol:string = "&marsSol="
  private page:String = "&page="
  private roboMars = "&robomars="

  constructor() { }
}
