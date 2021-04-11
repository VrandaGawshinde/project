import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private webService: WebService) { }
  postLogin(title: Object){
    return this.webService.post('login',title);
    }
    postRegister(title : Object){
    return this.webService.post('signup',title);
   }
   postFeedback(title : Object){
    return this.webService.post('feedback',title);
   }
   postReservation(title : Object){
    return this.webService.post('reservation',title);
   }
}
