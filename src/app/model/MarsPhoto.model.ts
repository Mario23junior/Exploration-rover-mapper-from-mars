import { Cameras } from "./cameras.model";
import { MarsRover } from "./marsRover.model";

export interface MarsPhoto {
    id: Number;
    sol: Number;
    camera: Cameras[];
    img_src: String;
    earth_date: String;
    rover: MarsRover[];
}