import {Categorie} from "./categorie";

export interface Book {
  roomId:Number;
  title:string;
  bookingStart:Date;
  bookingEnd:Date;
  duration:number;
  purpose:String;
}
