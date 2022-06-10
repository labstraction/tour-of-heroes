import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from 'src/app/model/hero';
import { HEROES } from 'src/app/model/mock-heroes';
import { MessageService } from '../message/message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageServ: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageServ.add('ciao, sono l\'hero service e ho caricato gli eroi');
    return heroes;
  }

  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(h => h.id === id)!;
    this.messageServ.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  // find(id: number){
  //   for (const hero of HEROES) {
  //     if (hero.id === id) {
  //       return hero;
  //     }
  //   }
  //   return undefined;
  // }
}
