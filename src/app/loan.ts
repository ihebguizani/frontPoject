import {User} from "./user";
import {Book} from "./book";

export interface Loan {
  idLoan:number;
  user:User;
  book:Book;
  startDate:Date;
  endDate:Date;
}
