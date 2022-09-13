import { Cameras } from "./cameras.model";
import { MarsRover } from "./marsRover.model";

export class MarsPhoto {
    id!: Number;
    sol!: Number;
    camera: Cameras[] = [];

    img!: String;

    earth_date!: String;
    rover: MarsRover[] = [];
}