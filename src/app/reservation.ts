import {User} from "./user";
import {Book} from "./book";

export interface Reservation {
  idRes:number;
  user:User;
  book:Book;
  resDate:Date;
}
